import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-buttons',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './material-buttons.component.html',
  styleUrl: './material-buttons.component.css'
})
export class MaterialButtonsComponent {
  
}
