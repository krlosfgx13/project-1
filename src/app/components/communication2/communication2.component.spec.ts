import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication2Component } from './communication2.component';

describe('Communication2Component', () => {
  let component: Communication2Component;
  let fixture: ComponentFixture<Communication2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Communication2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Communication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
