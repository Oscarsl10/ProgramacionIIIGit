import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NikeService } from './nike.service';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nike',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nike.component.html',
  styleUrl: './nike.component.css'
})
export class NikeComponent implements OnInit{
  
  nike: MarcasDeportivasc[];

  constructor(private nikeservice: NikeService){
    
  }
  ngOnInit(): void {
    this.nikeservice.getNike().subscribe(
      nike=> this.nike = nike
    )
  }

}
