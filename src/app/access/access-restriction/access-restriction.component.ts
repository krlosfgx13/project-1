import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-access-restriction',
  imports: [],
  templateUrl: './access-restriction.component.html',
  styleUrl: './access-restriction.component.css'
})
export class AccessRestrictionComponent implements OnInit {


  name: string;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.cookieService.get("login_user_name");
  }

  signOut() {
    //this.cookiService.delete("login_user_name");
    this.cookieService.deleteAll();
    swal.fire({
      icon: 'success',
      title: 'Ok',
      text: 'User has been signed out from the application.'
    });
    this.router.navigate(['/login'])
    //.then(() => {window.location.reload();});
  }
}
