package com.corhuila.marcas_deportivas.models.service;

import com.corhuila.marcas_deportivas.models.entity.marcas_deportivas;

import java.util.List;

public interface Imarcas_deportivasService {
    public List<marcas_deportivas> findall();

    public marcas_deportivas findById(Long id);
    public marcas_deportivas save(marcas_deportivas marcasDeportivas);
    public void delete(Long id);
}
