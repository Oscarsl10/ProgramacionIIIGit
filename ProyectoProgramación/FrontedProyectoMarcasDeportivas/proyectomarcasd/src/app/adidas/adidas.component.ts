import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdidasService } from './adidas.service';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adidas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './adidas.component.html',
  styleUrl: './adidas.component.css'
})
export class AdidasComponent implements OnInit{
  
  adidas: MarcasDeportivasc[];

  constructor(private adidasService: AdidasService){

  }

  ngOnInit(): void {
    this.adidasService.getAdidas().subscribe(
      adidas=> this.adidas = adidas 
    )
  }

}
