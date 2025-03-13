import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-material-input',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './material-input.component.html',
  styleUrl: './material-input.component.css'
})
export class MaterialInputComponent {
  number1: number = 0;
  number2: number = 0;
  isSumEnabled: boolean = true;
  isSubtractEnabled: boolean = false;
  isMultiplyEnabled: boolean = false;
  isDivideEnabled: boolean = false;
  result: number = 0;

  calculate(){
      this.result = 0;
      if(this.isSumEnabled){
          this.result = this.number1 + this.number2;
      }
      if(this.isSubtractEnabled){
          this.result = this.number1 - this.number2;
      }
      if(this.isMultiplyEnabled){
          this.result = this.number1 * this.number2;
      }
      if(this.isDivideEnabled){ 
          this.result = this.number1 / this.number2;
      }
  }

}
