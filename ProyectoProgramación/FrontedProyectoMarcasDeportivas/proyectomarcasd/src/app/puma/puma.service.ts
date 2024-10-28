import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { PUMA } from './puma.json';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PumaService {

  private urlEndPoint:string='http://localhost:8080/api/puma'

  constructor(private http:HttpClient) { }

  getPuma(): Observable <MarcasDeportivasc[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as MarcasDeportivasc[])
    )
  }
}
