import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../interfaces/LoginRequest';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;

  myForm = {
    email: "",
    password: ""
  }

  constructor(private cookieService: CookieService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        email: new FormControl(this.myForm.email, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"))]),
        password: new FormControl(this.myForm.password, [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$.!%*?&])[A-Za-z\\d@$!.%*?&]{8,}$"))
        ])
      });
  }

  get email() { return this.reactiveForm.get('email')!; }
  get password() { return this.reactiveForm.get('password')!; }

  // saveButtonBoolean = "block";
  // loaderBoolean = "none";

  sendData() {
    // this.saveButtonBoolean = "none";
    // this.loaderBoolean = "block"
    let request: LoginRequest = { correo: this.reactiveForm.value.email, password: this.reactiveForm.value.password };
    this.service.login(request).subscribe(
      {
        next: data => {
          //if ok, data contains the response from the API.
          if (data.estado == "ok") {
            this.cookieService.set('login_data', data.token, 1); //store the jwt in a cookie called login_data.
            this.cookieService.set('login_user_name', data.nombre, 1); //store the jwt in a cookie called login_data.
            window.location.href="/access-restriction";
          } else {
            swal.fire({
              icon: 'error',
              title: 'Ops..',
              text: 'Userame/password is not correct.'
            });
          }
        },
        error: error => {
          swal.fire({
            icon: 'error',
            title: 'Ops..',
            text: 'User name/password is not correct.'
          });
          // this.saveButtonBoolean = "block";
          // this.loaderBoolean = "none";
          this.reactiveForm.reset();
          this.router.navigate(['/login']);

          // this.router.navigate(['signup']).then(() => {
          //   window.location.reload();
          // });

        }
      }
    );
  }

}
