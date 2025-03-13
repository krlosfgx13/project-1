import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-tabs',
  imports: [MatTabsModule, RouterLink],
  templateUrl: './material-tabs.component.html',
  styleUrl: './material-tabs.component.css'
})
export class MaterialTabsComponent {

}
