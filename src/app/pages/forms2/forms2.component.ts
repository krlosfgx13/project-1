import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorDirectiveValidator } from '../../validations/validator.directive';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forms2',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css'] // 
})
export class Forms2Component implements OnInit {
  reactiveForm: FormGroup;
  user = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: ""
  };

  countries: Array<any> = ["Chile", "Guatemala", "Colombia"];

  //getters to retrieve the values from the reactive form.
  get name(){ return this.reactiveForm.get("name")!; }
  get email(){ return this.reactiveForm.get("email")!; }
  get phoneNumber(){ return this.reactiveForm.get("phoneNumber")!; }
  get address(){ return this.reactiveForm.get("address")!; }
  get country(){ return this.reactiveForm.get("country")!; }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.pattern("^[^\s@]+@[^\s@]+\.[^\s@]+$")]) ,
      phoneNumber: new FormControl(this.user.phoneNumber, [Validators.required, Validators.minLength(8)]),
      address: new FormControl(this.user.address, [Validators.required, Validators.minLength(4)]),
      country: new FormControl( /*this.user.country*/ )
    }, { validators: ValidatorDirectiveValidator } );
  }

  sendData(){
    console.log(this.reactiveForm.value.name);
    console.log(this.reactiveForm.value.email);
    console.log(this.reactiveForm.value.phoneNumber);
    console.log(this.reactiveForm.value.address);
    console.log(this.reactiveForm.value.country);
    let data =  'name: ' + this.reactiveForm.value.name + ' email: ' + this.reactiveForm.value.email + ' phoneNumber: ' + this.reactiveForm.value.phoneNumber + ' address: ' + this.reactiveForm.value.address + ' country: ' + this.reactiveForm.value.country;

      console.log(data);

    swal.fire({
      title: "Success",
      text: data,
      icon: "success"
    });

  }
}
