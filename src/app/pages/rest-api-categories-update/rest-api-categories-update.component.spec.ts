import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiCategoriesUpdateComponent } from './rest-api-categories-update.component';

describe('RestApiCategoriesUpdateComponent', () => {
  let component: RestApiCategoriesUpdateComponent;
  let fixture: ComponentFixture<RestApiCategoriesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiCategoriesUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiCategoriesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
