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
    'Authorization': 'Bearer '
  }

  constructor(private http: HttpClient) { 
    this.api = environment.api;
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}categorias`, {headers: this.header});
  }

  
}
