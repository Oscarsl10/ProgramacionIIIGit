package com.corhuila.marcas_deportivas.models.service;

import com.corhuila.marcas_deportivas.models.dao.Imarcas_deportivasDao;
import com.corhuila.marcas_deportivas.models.entity.marcas_deportivas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class marcas_deportivasServiceImpl implements Imarcas_deportivasService{
    @Autowired
    private Imarcas_deportivasDao marcasDeportivasDao;
    @Override
    @Transactional(readOnly = true)
    public List<marcas_deportivas> findall(){
        return (List<marcas_deportivas>) marcasDeportivasDao.findAll();
    }
}
