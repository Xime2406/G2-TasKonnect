package com.taskonnect.taskonnect.repository;

import com.taskonnect.taskonnect.entity.Espacios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspaciosRepository extends JpaRepository<Espacios, Integer> {
}
