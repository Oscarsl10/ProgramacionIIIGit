import { Component } from '@angular/core';
import { MarcasDeportivasc } from '../../marcas_deportivas/marcas-deportivasc';
import { Router } from '@angular/router';
import { NikeService } from '../nike.service';
import { FormsModule } from '@angular/forms';
import { NikeComponent } from '../nike.component';

@Component({
  selector: 'app-form-nike',
  standalone: true,
  imports: [NikeComponent, FormsModule],
  templateUrl: './form-nike.component.html'
})
export class FormNikeComponent {
  public nike: MarcasDeportivasc = new MarcasDeportivasc()
  titulo: string= "Formulario de marca Nike"

  constructor(private nikeService: NikeService, private router: Router){}
  
  ngOnInit(){}

  public create():void{
    
    // console.log("clicked");
    // console.log(this.nike);
    this.nikeService['create'](this.nike).subscribe(response=> this.router.navigate(["/nike"]))
  }
}
