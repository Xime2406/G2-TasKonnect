package com.taskonnect.taskonnect.service;

import com.taskonnect.taskonnect.dto.AuthenticationRequest;
import com.taskonnect.taskonnect.dto.AuthenticationResponse;
import com.taskonnect.taskonnect.dto.RegisterRequest;
import com.taskonnect.taskonnect.entity.Genero;
import com.taskonnect.taskonnect.entity.Usuario;
import com.taskonnect.taskonnect.repository.GeneroRepository;
import com.taskonnect.taskonnect.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    GeneroRepository generoRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    public AuthenticationResponse registro(RegisterRequest request) {
        Genero genero = request.getGeneroId() != null
                ? generoRepository.findById(request.getGeneroId()).orElse(null)
                : null;

        Usuario usuario = new Usuario();
        usuario.setGenero(genero);
        usuario.setCorreo(request.getCorreo());
        usuario.setClave(passwordEncoder.encode(request.getClave()));
        usuario.setNombres(request.getNombres());
        usuario.setApellidoPaterno(request.getApellidoPaterno());
        usuario.setApellidoMaterno(request.getApellidoMaterno());
        usuario.setFechaNacimiento(request.getFechaNacimiento());
        usuario.setEstado("1");
        usuario.setUsuarioCreacion(request.getCorreo());
        usuario.setFechaCreacion(new Date());

        usuarioRepository.save(usuario);

        UserDetails userDetails = userDetailsService.loadUserByUsername(usuario.getCorreo());

        var jwtToken = jwtService.generateToken(userDetails);
        var refreshToken = jwtService.generateRefreshToken(userDetails);

        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getCorreo(),
                        request.getClave()
                )
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getCorreo());

        var jwtToken = jwtService.generateToken(userDetails);
        var refreshToken = jwtService.generateRefreshToken(userDetails);

        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public AuthenticationResponse refreshToken(String refreshToken) {
        String username = jwtService.extractUsername(refreshToken);
        if (username != null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(refreshToken, userDetails)) {
                String accessToken = jwtService.generateToken(userDetails);

                return AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
            }
        }
        throw new RuntimeException("Refresh token inválido");
    }
}