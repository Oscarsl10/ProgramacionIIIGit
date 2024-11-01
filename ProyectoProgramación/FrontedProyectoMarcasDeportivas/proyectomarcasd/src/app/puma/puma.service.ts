import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { PUMA } from './puma.json';
import { MarcasDeportivasc } from '../marcas_deportivas/marcas-deportivasc';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PumaService {

  private urlEndPoint:string='http://localhost:8080/api/puma'
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getPuma(): Observable <MarcasDeportivasc[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as MarcasDeportivasc[])
    )
  }
  create(puma:MarcasDeportivasc): Observable<MarcasDeportivasc>{
    return this.http.post<MarcasDeportivasc>(this.urlEndPoint,puma, {headers:this.httpHeaders})
  }
}
