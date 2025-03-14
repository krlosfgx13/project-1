import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExpansionComponent } from './material-expansion.component';

describe('MaterialExpansionComponent', () => {
  let component: MaterialExpansionComponent;
  let fixture: ComponentFixture<MaterialExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialExpansionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
