package com.taskonnect.taskonnect.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "espacios_usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EspaciosUsuarios {

    @Id
    @Column(name = "id_espacios_usuarios")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEspaciosUsuarios;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_espacios")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Espacios espacios;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Usuario usuario;

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
