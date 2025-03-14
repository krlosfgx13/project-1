import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  text: string = "";

  constructor(private exampleService: ExampleService) { //Service is injected from ExampleService.
    this.text = exampleService.getData();
  }
  ngOnInit(): void {
    this.text = this.exampleService.anotherMethod('Antonio', 'Caceres');
  }
}
