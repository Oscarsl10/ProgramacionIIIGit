import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PumaService } from './puma.service';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-puma',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './puma.component.html',
  styleUrl: './puma.component.css'
})
export class PumaComponent implements OnInit{

  puma: MarcasDeportivasc[];

  constructor (private pumaService : PumaService){
    
  }
  ngOnInit(): void {
    this.pumaService.getPuma().subscribe(
      puma=> this.puma = puma
    )
  }

}
