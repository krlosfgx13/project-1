import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent {
  text: string = "Initial text";

  constructor(){
    //is executed at the beginning of the class
    console.log("execution from constructor.");
  }

  //Life cycle hooks.

  ngOnInit(): void{
    //is executed after the beginning of the class
    console.log("execution from onInit.");
  }

  ngDoCheck(){
    //is executed when component is affected by some change.
    console.log("executing ngDoCheck");

  }

  changeText(){
    this.text = "text has been changed.";
  }

}
