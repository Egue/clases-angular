import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private apiUrl = '';
  constructor(private http:HttpClient) {}

  getPagos(): Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
