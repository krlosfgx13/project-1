import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  imports: [RouterLink],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent implements OnInit {
  
  constructor(private cookieService: CookieService) { }
  
  ngOnInit() {
    this.setCookie();
  }

  setCookie() {
    this.cookieService.set('myCookie', 'Hello World', 1);
  }
}
