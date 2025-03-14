import { Injectable } from '@angular/core';

//This means service can be injected in components.
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  getData(){
    return "Hello from service";
  }

  anotherMethod(name: string, lastName: string){
    return `your name is ${name} ${lastName}`;
  }
}
