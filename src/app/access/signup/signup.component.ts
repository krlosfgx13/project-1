import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpRequest } from '../../interfaces/SignUpRequest';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  // testRegex() {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.,$!%*?&])[A-Za-z\d@.,$!%*?&]{8,}$/;

  //get value from html.
  //   const password = this.reactiveForm.get('password')?.value;
  //   console.log(passwordRegex.test(password));
  //   alert(password + " --> " + passwordRegex.test(password));
  // }

  reactiveForm: FormGroup;

  myForm = {
    name: "",
    email: "",
    password: ""
  }

  constructor(private service: AuthService, private router: Router) { };

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        name: new FormControl(this.myForm.name, [Validators.required, Validators.minLength(4)]),
        email: new FormControl(this.myForm.email, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"))]),
        password: new FormControl(this.myForm.password, [
          Validators.required, 
          Validators.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$.!%*?&])[A-Za-z\\d@$!.%*?&]{8,}$"))
        ])
      });
  }

    //validate characters as they are being typed
    // this.reactiveForm.get('password')?.valueChanges.subscribe(value => {
    //   console.log("Password value:", value);
    //   console.log("Password errors:", this.reactiveForm.get('password')?.errors);
    // });


  get name() { return this.reactiveForm.get('name')!; }
  get email() { return this.reactiveForm.get('email')!; }
  get password() { return this.reactiveForm.get('password')!; }

  sendData() {
    //let jsonRequest: CategoryRequest = { nombre: this.reactiveForm.value.name }
    let jsonRequest: SignUpRequest = {
      nombre: this.reactiveForm.value.name,
      correo: this.reactiveForm.value.email,
      password: this.reactiveForm.value.password
    };

    this.service.signUp(jsonRequest).subscribe(
      {
        next: data => {
          //if ok, data contains the response from the API.
          if (data.estado == "ok") {
            swal.fire({
              icon: 'success',
              title: 'Ok',
              text: 'The record was stored successfuly.'
            });
          } else {
            swal.fire({
              icon: 'error',
              title: 'Ops..',
              text: 'Email is already being used.'
            });
          }
        },
        error: error => {
          swal.fire({
            icon: 'error',
            title: 'Ops..',
            text: 'An error occurred, please try again.'
          });
          this.router.navigate(['/signup']);

          // this.router.navigate(['signup']).then(() => {
          //   window.location.reload();
          // });

        }
      }
    )
  }
}
