package com.corhuila.marcas_deportivas.controllers;

import com.corhuila.marcas_deportivas.models.entity.marcas_deportivas;
import com.corhuila.marcas_deportivas.models.service.Imarcas_deportivasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/marcasDeportivas/{id}")
    public marcas_deportivas show(@PathVariable Long id){
        return marcas_deportivasService.findById(id);
    }

    @PostMapping("/marcasDeportivas")
    @ResponseStatus(HttpStatus.CREATED)
    public marcas_deportivas create(@RequestBody marcas_deportivas marcasDeportivas){
        return marcas_deportivasService.save(marcasDeportivas);
    }

    @PutMapping("/marcasDeportivas/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public marcas_deportivas update(@RequestBody marcas_deportivas marcasDeportivas, @PathVariable Long id){
        marcas_deportivas marcas_deportivasActual = marcas_deportivasService.findById(id);
        marcas_deportivasActual.setNombre(marcasDeportivas.getNombre());
        marcas_deportivasActual.setFecha_fundacion(marcasDeportivas.getFecha_fundacion());
        marcas_deportivasActual.setOrigen(marcasDeportivas.getOrigen());
        marcas_deportivasActual.setIngresos_anuales(marcasDeportivas.getIngresos_anuales());
        marcas_deportivasActual.setEmpleados(marcasDeportivas.getEmpleados());
        return marcas_deportivasService.save(marcas_deportivasActual);
    }

    @DeleteMapping("/marcasDeportivas/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        marcas_deportivasService.delete(id);
    }

}
