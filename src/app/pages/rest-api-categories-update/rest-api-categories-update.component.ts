import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../services/api-rest.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryRequest } from '../../interfaces/CategoryRequest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rest-api-categories-update',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './rest-api-categories-update.component.html',
  styleUrl: './rest-api-categories-update.component.css'
})
export class RestApiCategoriesUpdateComponent implements OnInit {
  reactiveForm: FormGroup;
  data: any = {};
  id: string;

  form = {
    name: ''
  };

  constructor(private service: ApiRestService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    let params: any = this.route.snapshot.params;
    this.id = params.id;
    this.performRequest(this.id);
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.form.name, [Validators.required, Validators.minLength(4)])
    });
  }

  get name() { return this.reactiveForm.get("name")!; }

  performRequest(id: any){
    this.service.getCategoriesById(id).subscribe({
      next: (data) => {
        this.data = data;
        this.reactiveForm.get('name')?.setValue(this.data.nombre);
      },
      error: (error) => {
        this.router.navigate(['/error']).then(() => {
          window.location.reload();
        });
        console.error(error);
      }
    })
  }

  sendData() {
        let jsonRequest: CategoryRequest = { nombre: this.reactiveForm.value.name }
        this.service.updateCategory(this.id, jsonRequest).subscribe({
          next: data => {
            swal.fire({
              title: 'Success',
              text: 'Record updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            /*
              this.router.navigate(['/api/categorias']).then(() => {
              window.location.reload();
            */
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

}
