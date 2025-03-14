import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-sessionstorage2',
  imports: [],
  templateUrl: './sessionstorage2.component.html',
  styleUrl: './sessionstorage2.component.css'
})
export class Sessionstorage2Component implements OnInit {

  public mySessionStorageValue: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("nameSessionStorage") != null) {
      this.mySessionStorageValue = sessionStorage.getItem("nameSessionStorage");
    }
    else {
      console.log("Sorry, your browser does not support web storage...");
      this.router.navigate(['/']);
    }
  }

  removeSessionStorageItem() {
    //sessionStorage.clear(); remove all the items from session storage.
    sessionStorage.removeItem("nameSessionStorage");
    swal.fire({
      icon: 'success',
      title: 'Ok',
      text: 'Item removed from session storage'
    })
    this.router.navigate(['/']);
  }
}

