import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example.component';
import { Example2Component } from "./example2/example2.component";
import { BasicsComponent } from './components/basics/basics.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { LifeCycleComponent } from "./components/life-cycle/life-cycle.component";
import { CommunicationComponent } from "./components/communication/communication.component";
import { Communication2Component } from './components/communication2/communication2.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ValidatorDirective } from './validations/validator.directive';
import { MaterialButtonsComponent } from './pages/material-buttons/material-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    ExampleComponent,
    Example2Component,
    BasicsComponent,
    DataBindingComponent,
    LifeCycleComponent,
    CommunicationComponent,
    Communication2Component,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    ValidatorDirective,
    MaterialButtonsComponent,
    MatButtonModule,
    MatIconModule,
    NgbModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-1';
}
