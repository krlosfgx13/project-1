import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  user: any;
  countries: Array<any> = ["Chile", "Guatemala", "Colombia"];
  users: Array<any> = [];

  constructor(){
    this.user = 
    {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      country: ""
    }
  }

  ngOnInit(): void{
    
    this.countries = ["Chile", "Guatemala", "Colombia"];
  }

  isCheckBoxMarked: boolean = false;

  selectCheck(event: any){
    if(event.target.checked){
      this.isCheckBoxMarked = true;
      alert("YES");
    } else{
      this.isCheckBoxMarked = false;
      alert("NO");
    }
  }

  send(){
    // console.log(this.user.name);
    // console.log(this.user.email);
    // console.log(this.user.phoneNumber);
    // console.log(this.user.address);
    // console.log(this.user.country);
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      address: this.user.address,
      country: this.user.country
    });
  }

}
