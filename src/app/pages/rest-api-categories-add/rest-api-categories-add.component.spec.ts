import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiCategoriesAddComponent } from './rest-api-categories-add.component';

describe('RestApiCategoriesAddComponent', () => {
  let component: RestApiCategoriesAddComponent;
  let fixture: ComponentFixture<RestApiCategoriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiCategoriesAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiCategoriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
