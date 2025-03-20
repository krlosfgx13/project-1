import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  //disable some areas on the header.
  isLoggedIn: boolean = false;

  constructor(private cookieService: CookieService){ }

  ngOnInit(): void {
    if(this.cookieService.check("login_data")){
      this.isLoggedIn = true;
    } else{
      this.isLoggedIn = false;
    }
  }
}
