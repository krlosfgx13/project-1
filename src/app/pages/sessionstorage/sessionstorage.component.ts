import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sessionstorage',
  imports: [RouterLink],
  templateUrl: './sessionstorage.component.html',
  styleUrl: './sessionstorage.component.css'
})
export class SessionstorageComponent implements OnInit {
  ngOnInit(): void {
    this.createValueInSessionStorage();
  }

  createValueInSessionStorage() {
    if (typeof (Storage) !== "undefined") {
      sessionStorage.setItem("nameSessionStorage", "DSFASD");
      sessionStorage.setItem("lastnameSessionStorage", "ADFASDFAS");
      sessionStorage.setItem("ageSessionStorage", "ADSFASDF");
    } else {
      console.log("Sorry, your browser does not support web storage...");
    }
  }
}
