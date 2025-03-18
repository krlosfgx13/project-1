import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryResponse } from '../../interfaces/CategoryResponse';
import { ApiRestService } from '../../services/api-rest.service';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-rest-api-categories',
  imports: [RouterLink, CommonModule],
  templateUrl: './rest-api-categories.component.html',
  styleUrl: './rest-api-categories.component.css'
})
export class RestApiCategoriesComponent implements OnInit {

  data: Array<CategoryResponse>;
  numberOfRecords: any;

  constructor(private service: ApiRestService, private router: Router) { }
  ngOnInit(): void {
    this.performGetRequest();
  }

  performGetRequest() {
    this.service.getCategories().subscribe({
      next: data => {
        console.log(data);
        this.data = data
        this.numberOfRecords = Object.keys(this.data).length;
      },
      error: error => {
        console.log(error);
      }
    }
    );
  }

  deleteCategory(id: any) {
    this.service.deleteCategory(id).subscribe({
      next: data => {
        swal.fire({
          title: 'Do you really want to delete this record?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
            this.service.deleteCategory(id).subscribe({
              next: data => {
                if (data.estado == "ok") {
                  swal.fire({
                    title: 'Success',
                    timer: 2000,
                    text: 'Record deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                  this.router.navigate(['/api/categorias']).then(() => {
                    window.location.reload();
                  });
                } else {
                  swal.fire({
                    title: 'Error',
                    text: 'An error has occurred',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    timer: 2000
                  });
                }
              }
            });
          } 
          console.log("not confirmed, no record should be deleted.");
          this.router.navigate(['/api/categorias']).then(() => {
            window.location.reload();
          });
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  /*
  execution process based on the button clicked from sweet alert.
  const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    
  //Read more about handling dismissals below 
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});


  */ 

}
