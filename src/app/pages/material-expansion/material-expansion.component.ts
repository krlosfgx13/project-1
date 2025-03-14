import { Component, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-material-expansion',
  imports: [MatExpansionModule],
  templateUrl: './material-expansion.component.html',
  styleUrl: './material-expansion.component.css'
})
export class MaterialExpansionComponent {
  @ViewChild(MatExpansionModule) accordion: MatExpansionModule;

}
