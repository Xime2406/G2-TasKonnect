package com.taskonnect.taskonnect.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @Column(name = "id_usuario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_genero")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Genero genero;

    @Column(name = "correo", length = 100)
    private String correo;

    @Column(name = "clave", length = 100)
    private String clave;

    @Column(name = "nombres", length = 100)
    private String nombres;

    @Column(name = "apellido_paterno", length = 50)
    private String apellidoPaterno;

    @Column(name = "apellido_materno", length = 50)
    private String apellidoMaterno;

    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    @Column(name = "estado", length = 1)
    private String estado;

    @Column(name = "usuario_creacion", length = 50)
    private String usuarioCreacion;

    @Column(name = "usuario_modificacion", length = 50)
    private String usuarioModificaion;

    @Column(name = "fecha_creacion")
    private Date fechaCreacion;

    @Column(name = "fecha_modificacion")
    private Date fechaModificacion;

}
