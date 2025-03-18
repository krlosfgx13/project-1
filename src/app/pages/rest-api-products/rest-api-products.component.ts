import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiRestService } from '../../services/api-rest.service';
import { error } from 'console';
import { ProductsResponse } from '../../interfaces/ProductsResponse';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from "../../utils/format-number.pipe";

@Component({
  selector: 'app-rest-api-products',
  imports: [RouterLink, CommonModule, FormatNumberPipe],
  templateUrl: './rest-api-products.component.html',
  styleUrl: './rest-api-products.component.css'
})
export class RestApiProductsComponent implements OnInit {

  data: Array<ProductsResponse>
  total: any;
  perPage: any;
  page: any = 1;
  links: number;
  pages: Array<any> = [];

  constructor(private service: ApiRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let params : any = this.route.snapshot.queryParams;
    this.page = parseInt(params.page ? params.page : 1);
    this.performRequest(this.page);
  }

  performRequest(page: any) {
    this.service.getProducts(page).subscribe({
      next: data => {
        this.data = data.datos;
        this.total = data.total;
        this.perPage = data.per_page;
        this.links = data.links;

        for(let i = 1; i<=this.links; i++){
          this.pages[i] = i;
        }
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }
  edit(id: any){

  }
  delete(id: any){}

}
