package com.corhuila.tareainicial.controllers;

import com.corhuila.tareainicial.models.entity.Tarea;
import com.corhuila.tareainicial.models.service.ITareaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TareaRestController {
    @Autowired
    private ITareaService tareaService;

    @GetMapping("/tareas")
    public List<Tarea> index(){
        return tareaService.findall();
    }

    @GetMapping("/tareas/{id}")
    public Tarea show(@PathVariable Long id){
        return tareaService.findById(id);
    }

    @PostMapping("/tareas")
    @ResponseStatus(HttpStatus.CREATED)
    public Tarea create(@RequestBody Tarea tarea){
        return tareaService.save(tarea);
    }

    @PutMapping("/tareas/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Tarea update(@RequestBody Tarea tarea, @PathVariable Long id){
        Tarea tareaActual = tareaService.findById(id);
        tareaActual.setNomTarea(tarea.getNomTarea());
        tareaActual.setDescripcion(tarea.getDescripcion());
        tareaActual.setEmail(tarea.getEmail());
        tareaActual.setResponsable(tarea.getResponsable());
        return tareaService.save(tareaActual);
    }
    @DeleteMapping("/tareas/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        tareaService.delete(id);
    }
}
