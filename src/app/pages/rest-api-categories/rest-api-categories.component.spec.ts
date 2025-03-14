import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiCategoriesComponent } from './rest-api-categories.component';

describe('RestApiCategoriesComponent', () => {
  let component: RestApiCategoriesComponent;
  let fixture: ComponentFixture<RestApiCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
