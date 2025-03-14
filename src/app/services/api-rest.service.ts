import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs'; //manages the responses.
import { HttpClient } from '@angular/common/http'; //manages the requests.
import { CategoryRequest } from '../interfaces/CategoryRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  api: string;
  header = {
    'content-type': 'application/json'
  }

  constructor(private http: HttpClient) { 
    this.api = environment.api;
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}categorias`, {headers: this.header});
  }

  addCategory(jsonRequest: CategoryRequest): Observable<any> {
    return this.http.post(`${this.api}categorias`,jsonRequest, {headers: this.header});
  }  
}
