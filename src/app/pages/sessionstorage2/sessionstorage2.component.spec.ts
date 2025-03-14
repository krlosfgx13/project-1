import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessionstorage2Component } from './sessionstorage2.component';

describe('Sessionstorage2Component', () => {
  let component: Sessionstorage2Component;
  let fixture: ComponentFixture<Sessionstorage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessionstorage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessionstorage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
