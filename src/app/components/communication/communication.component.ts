import { Component } from '@angular/core';
import { Communication2Component } from "../communication2/communication2.component";

@Component({
  selector: 'app-communication',
  imports: [Communication2Component],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  text1: string = "text1";
  text2: string = "text2";
  children: string;

updateChildren(value: string){
  this.children = value;
}

}
