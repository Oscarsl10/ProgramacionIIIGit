package com.corhuila.tareainicial.models.service;

import com.corhuila.tareainicial.models.dao.ITareaDao;
import com.corhuila.tareainicial.models.entity.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TareaServiceImpl implements ITareaService {
    @Autowired
    private ITareaDao tareaDao;
    @Override
    @Transactional(readOnly = true)
    public List<Tarea> findall() {
        return (List<Tarea>) tareaDao.findAll();
    }
    @Override
    @Transactional(readOnly = true)
    public Tarea findById(Long id){
        return tareaDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Tarea save(Tarea tarea) {
        return tareaDao.save(tarea);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        tareaDao.deleteById(id);
    }
}
