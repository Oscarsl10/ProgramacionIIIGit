import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { NIKE } from './nike.json';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NikeService {

  private urlEndPoint:string='http://localhost:8080/api/nike'

  constructor(private http:HttpClient) { }

  getNike(): Observable <MarcasDeportivasc[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as MarcasDeportivasc[])
    )
  }
}
