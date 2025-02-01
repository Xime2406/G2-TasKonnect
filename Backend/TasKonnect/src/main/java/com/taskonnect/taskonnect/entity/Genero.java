package com.taskonnect.taskonnect.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "genero")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Genero {

    @Id
    @Column(name = "id_genero")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idGenero;

    @Column(name = "descripcion", length = 200)
    private String descripcion;

    @Column(name = "estado", length = 1)
    private String estado;

    @Column(name = "usuario_creacion", length = 50)
    private String usuarioCreacion;

    @Column(name = "usuario_modificacion", length = 50)
    private String usuarioModificaion;

    @Column(name = "fecha_creacion")
    private Date fechaCreacion;

    @Column(name = "fecha_modificacion")
    private String fechaModificacion;
}
