import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ADIDAS } from './adidas.json';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdidasService {
   private urlEndPoint:string='http://localhost:8080/api/adidas'
   private httpHeaders = new HttpHeaders({'content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getAdidas(): Observable <MarcasDeportivasc[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as MarcasDeportivasc[])
    )
  }
  create(adidas:MarcasDeportivasc): Observable<MarcasDeportivasc>{
    return this.http.post<MarcasDeportivasc>(this.urlEndPoint,adidas, {headers:this.httpHeaders})
  }
}
