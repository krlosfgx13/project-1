import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiProductsComponent } from './rest-api-products.component';

describe('RestApiProductsComponent', () => {
  let component: RestApiProductsComponent;
  let fixture: ComponentFixture<RestApiProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
