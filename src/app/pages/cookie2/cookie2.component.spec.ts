import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookie2Component } from './cookie2.component';

describe('Cookie2Component', () => {
  let component: Cookie2Component;
  let fixture: ComponentFixture<Cookie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cookie2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cookie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
