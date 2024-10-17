package com.corhuila.tareainicial.models.service;

import com.corhuila.tareainicial.models.entity.Tarea;

import java.util.List;

public interface ITareaService {
    public List<Tarea> findall();

    public Tarea findById(Long id);
    public Tarea save(Tarea tarea);
    public void delete(Long id);
}
