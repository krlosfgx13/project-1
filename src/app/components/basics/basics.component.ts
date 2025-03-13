import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormatDatePipe } from '../../utils/format-date.pipe';
import { FormatNumberPipe } from '../../utils/format-number.pipe';

@Component({
  selector: 'app-basics',
  imports: [NgIf, CommonModule, FormatDatePipe, FormatNumberPipe],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  name:string = "Antonio Caceres";
  email:any = "antoniocaceres@host.net";
  age:number = 19;
  date = new Date();
  html:string = `<strong>bold text</strong>`
  countries: Array<any> = ["Chile", "Guatemala", "Colombia"];
  countriesAndDomain: Array<any>;
  example:string;
  num: number = 28;
  amount: number = 1234567;
  text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
  "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
  "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem Ipsum is simply dummy text of the " +
  "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  constructor(){
    this.countriesAndDomain = [
      {
        name: "Chile",
        domain: "cl"
      },
      {
        name: "Guatemala",
        domain: "gt"
      },
      {
        name: "Colombia",
        domain: "co"
      }
    ]
  }

  ngOnInit(): void{

  }
}
