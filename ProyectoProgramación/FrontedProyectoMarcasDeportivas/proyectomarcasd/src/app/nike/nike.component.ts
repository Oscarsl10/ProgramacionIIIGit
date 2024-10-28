import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NikeService } from './nike.service';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';

@Component({
  selector: 'app-nike',
  standalone: true,
  imports: [CommonModule],
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
