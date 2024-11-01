import { Component } from '@angular/core';
import { MarcasDeportivasc } from '../../marcas_deportivas/marcas-deportivasc';
import { Router } from '@angular/router';
import { AdidasService } from '../adidas.service';
import { AdidasComponent } from '../adidas.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-adidas',
  standalone: true,
  imports: [FormsModule, AdidasComponent],
  templateUrl: './form-adidas.component.html'
})
export class FormAdidasComponent {
  public adidas: MarcasDeportivasc = new MarcasDeportivasc()
  titulo: string= "Formulario de marca Adicas"

  constructor(private adidasService: AdidasService, private router: Router){}
  
  ngOnInit(){}

  public create():void{
    
    // console.log("clicked");
    // console.log(this.adidas);
    this.adidasService['create'](this.adidas).subscribe(response=> this.router.navigate(["/adidas"]))
  }
}
