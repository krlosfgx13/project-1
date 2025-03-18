import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../services/api-rest.service';
import swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryRequest } from '../../interfaces/CategoryRequest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rest-api-categories-add',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './rest-api-categories-add.component.html',
  styleUrl: './rest-api-categories-add.component.css'
})
export class RestApiCategoriesAddComponent implements OnInit {
  reactiveForm: FormGroup;

  form = {
    name: ''
  };

  constructor(private service: ApiRestService, private router: Router) { }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.form.name, [Validators.required, Validators.minLength(4)])
    });
  }

  get name() { return this.reactiveForm.get("name")!; }

  sendData() {
    let jsonRequest: CategoryRequest = { nombre: this.reactiveForm.value.name }
    this.service.addCategory(jsonRequest).subscribe({
      next: data => {
        swal.fire({
          title: 'Success',
          text: 'Category added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      },
      error: error => {
        swal.fire({
          title: 'Error',
          text: 'An error has occurred',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/api/categorias/add']).then(() => {
          window.location.reload();
        });
      }
    });
  }

  redirectToHome() {
    this.router.navigate(['/api/categorias']);
  }
}
