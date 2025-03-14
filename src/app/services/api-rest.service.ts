import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs'; //manages the responses.
import { HttpClient } from '@angular/common/http'; //manages the requests.

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  api: string;
  header = {
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTc0MTk4NzQ1MCwiZXhwIjoxNzQ0NTc5NDUwfQ.v9E_uenO2RB0FfQeiPAL3ZaWesyu6KZSdvQhbPOVdEA'
  }

  constructor(private http: HttpClient) { 
    this.api = environment.api;
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}categorias`, {headers: this.header});
  }

  
}
