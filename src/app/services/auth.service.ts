import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs'; //manages the responses.
import { HttpClient } from '@angular/common/http'; //manages the requests.
import { SignUpRequest } from '../interfaces/SignUpRequest';
import { LoginRequest } from '../interfaces/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string;

  constructor(private httpClient: HttpClient) {
    this.api = environment.api;
   }

  //header is not necessary, jwt is not present here, auth not needed.
  signUp(request: SignUpRequest): Observable<any> {
    return this.httpClient.post(`${this.api}registro`, request);
  }

  //login, returns the jwt, stores it locallu (cookie, local storage, or sessiin storage, and sends it in the header of the requests.)
  login(request: LoginRequest): Observable<any> {
    return this.httpClient.post(`${this.api}login`, request);
  }

}
