import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-localstorage',
  imports: [RouterLink],
  templateUrl: './localstorage.component.html',
  styleUrl: './localstorage.component.css'
})
export class LocalstorageComponent implements OnInit {
  ngOnInit(): void {
    this.createLocalStorage();
  }

  createLocalStorage() {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("name", "Antonio");
      localStorage.setItem("lastname", "Caceres");
      localStorage.setItem("age", "25");
    } else {
      console.log("Sorry, your browser does not support web storage...");
    }
  }

}
