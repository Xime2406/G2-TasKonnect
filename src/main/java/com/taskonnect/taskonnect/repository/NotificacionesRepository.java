package com.taskonnect.taskonnect.repository;

import com.taskonnect.taskonnect.entity.Notificaciones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificacionesRepository extends JpaRepository<Notificaciones, Integer> {
}
