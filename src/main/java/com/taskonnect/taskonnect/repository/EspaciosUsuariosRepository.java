package com.taskonnect.taskonnect.repository;

import com.taskonnect.taskonnect.entity.EspaciosUsuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspaciosUsuariosRepository extends JpaRepository<EspaciosUsuarios, Integer> {
}
