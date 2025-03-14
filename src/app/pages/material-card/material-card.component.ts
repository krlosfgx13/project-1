import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-card',
  imports: [RouterLink, MatCardModule],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css'
})
export class MaterialCardComponent {

}
