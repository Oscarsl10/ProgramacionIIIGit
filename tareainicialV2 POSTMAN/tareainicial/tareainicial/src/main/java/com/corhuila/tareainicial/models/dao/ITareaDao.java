package com.corhuila.tareainicial.models.dao;

import com.corhuila.tareainicial.models.entity.Tarea;
import org.springframework.data.repository.CrudRepository;

public interface ITareaDao extends CrudRepository <Tarea, Long> {
}
