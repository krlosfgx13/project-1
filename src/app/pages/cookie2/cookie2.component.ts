import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-cookie2',
  imports: [],
  templateUrl: './cookie2.component.html',
  styleUrl: './cookie2.component.css'
})
export class Cookie2Component implements OnInit {

  myCookieValue: string;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    if (this.cookieService.check('myCookie')) {
      this.myCookieValue = this.cookieService.get('myCookie');
    } else {
      this.router.navigate(['/']);
    }
  }

  removeCookieItem() {
    //this.cookieService.deleteAll(); remove all the items from cookie.
    this.cookieService.delete('myCookie');
    swal.fire({
      icon: 'success',
      title: 'Ok',
      text: 'Item removed from cookie'
    })
  }
}
