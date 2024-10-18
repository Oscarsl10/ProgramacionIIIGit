package com.corhuila.marcas_deportivas.controllers;

import com.corhuila.marcas_deportivas.models.entity.marcas_deportivas;
import com.corhuila.marcas_deportivas.models.service.Imarcas_deportivasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class marcas_deportivasRestController {
    @Autowired
    private Imarcas_deportivasService marcas_deportivasService;

    @GetMapping("/marcasDeportivas")
    public List<marcas_deportivas> index(){
        return marcas_deportivasService.findall();
    }
}
