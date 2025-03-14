import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryResponse } from '../../interfaces/CategoryResponse';
import { ApiRestService } from '../../services/api-rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rest-api-categories',
  imports: [RouterLink, CommonModule],
  templateUrl: './rest-api-categories.component.html',
  styleUrl: './rest-api-categories.component.css'
})
export class RestApiCategoriesComponent implements OnInit {

  data: Array<CategoryResponse>;

  constructor(private service: ApiRestService){ }
  ngOnInit(): void {
    this.performGetRequest();
  }

  performGetRequest(){
    this.service.getCategories().subscribe({
      next: data => {
        console.log(data);
        this.data = data
      }, 
      error: error => {
        console.log(error);
      }
    }
    );
  }

}
