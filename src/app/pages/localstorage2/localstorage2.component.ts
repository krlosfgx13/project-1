import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-localstorage2',
  imports: [],
  templateUrl: './localstorage2.component.html',
  styleUrl: './localstorage2.component.css'
})
export class Localstorage2Component implements OnInit {

  public myLocalStorageValue: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("name") != null) {
      this.myLocalStorageValue = localStorage.getItem("name");
    } else {
      console.log("Sorry, your browser does not support web storage...");
      this.router.navigate(['/']);
    }
  }

  removeLocalStorageItem() {
    //localStorage.clear(); remove all the items from local storage.
    localStorage.removeItem("name");
    swal.fire({
      icon: 'success',
      title: 'Ok',
      text: 'Item removed from local storage'
    })
    this.router.navigate(['/']);
  }
}
