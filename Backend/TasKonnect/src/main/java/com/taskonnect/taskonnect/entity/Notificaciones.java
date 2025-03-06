package com.taskonnect.taskonnect.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "notificaciones")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notificaciones {

    @Id
    @Column(name = "id_notificaciones")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idNotificaciones;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Usuario usuario;

    @Column(name = "intervalo_notificaciones")
    private Integer intervaloNotificaciones;

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
