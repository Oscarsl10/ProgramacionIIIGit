import { Component } from '@angular/core';
import { MarcasDeportivasc } from '../../marcas_deportivas/marcas-deportivasc';
import { Router } from '@angular/router';
import { PumaService } from '../puma.service';
import { PumaComponent } from '../puma.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-puma',
  standalone: true,
  imports: [PumaComponent, FormsModule],
  templateUrl: './form-puma.component.html'
})
export class FormPumaComponent {
  public puma: MarcasDeportivasc = new MarcasDeportivasc()
  titulo: string= "Formulario de marca Puma"

  constructor(private pumaService: PumaService, private router: Router){}
  
  ngOnInit(){}

  public create():void{
    
    // console.log("clicked");
    // console.log(this.puma);
    this.pumaService['create'](this.puma).subscribe(response=> this.router.navigate(["/puma"]))
  }
}
