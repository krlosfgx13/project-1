import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route2',
  imports: [],
  templateUrl: './route2.component.html',
  styleUrl: './route2.component.css'
})
export class Route2Component {
  id: string;
  slug: string;
  pageNo: string;
  pageSize: string;

  constructor(private route: ActivatedRoute, private titleServices: Title){ }

  ngOnInit(): void{
    this.changeTitle("Angular Course - Route 2");
    //let params: any = this.route.snapshot.params;
    // let {id, slug} = this.route.snapshot.params;
    // console.log("id=" + id + " | " + "slug=" + slug);
    let params: any = this.route.snapshot.params;
    let queryParams: any = this.route.snapshot.queryParams;
    this.id = params.id;
    this.slug = params.slug;
    this.pageNo = (queryParams.pageNo) ? queryParams.pageNo : 1;
    this.pageSize = (queryParams.pageSize) ? queryParams.pageSize : 10;
    console.log("id=" + this.id + " | " + "slug=" + this.slug);
    console.log(("pageNo=" + this.pageNo + " | " + "slug=" + this.slug));
  }

  public changeTitle(title: string){
    this.titleServices.setTitle(title);
  }


}
