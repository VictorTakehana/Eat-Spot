import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  urlBase = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getCep(cep:string): Observable<any>{
    const url = `${this.urlBase}${cep}/json/`;
    return this.http.get(url);
  }
}
