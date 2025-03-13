import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-communication2',
  imports: [],
  templateUrl: './communication2.component.html',
  styleUrl: './communication2.component.css'
})
export class Communication2Component {
  //pass values from parent to children
  @Input() title: string;
  @Input() subtitle: string;

  //pass values from children to parent
  @Output() childrenValue = new EventEmitter<string>();

  ngOnInit(): void{
    this.childrenValue.emit("value from child.");
  }

}
