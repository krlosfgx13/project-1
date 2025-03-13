import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  isDisabled : boolean = false;
  color : string = "red";
  text : string = "Hi, this is new text";
  img: string = "eagle.png"
  width: number = 200;
  height: number = 150;

change(){
  this.img="logo.png";
  this.width=400;
  this.height=200;
}


}
