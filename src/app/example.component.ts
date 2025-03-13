import { Component } from "@angular/core";

@Component({
    selector: 'app-example', //component name
    template: `
        <h4>Hello world from my component</h4>
        <h5>Another text from my component</h5>
    `, //content
    standalone: true
})

export class ExampleComponent{}

// Bootstrap the app without a module
//bootstrapApplication(ExampleComponent);