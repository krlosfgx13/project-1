import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailValidator, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @ViewChild("myModalConf", { static: false }) myModalConf: TemplateRef<any>;
  modalTitle: string;

  user: any;
  countries: Array<any> = ["Chile", "Guatemala", "Colombia"];
  users: Array<any> = [];

  constructor(private modalService: NgbModal) {
    this.user = 
    {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      country: ""
    }
   }

  openModal() {
    this.modalService.open(this.myModalConf, { size: 'lg' });
  }

  send(){
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.phoneNumber);
    console.log(this.user.address);
    console.log(this.user.country);

    // this.user.name = "";
    // this.user.email = "";
    // this.user.phoneNumber = ""; 
    // this.user.address = "";
    // this.user.country = "";
  }

}
