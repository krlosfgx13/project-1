import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionstorageComponent } from './sessionstorage.component';

describe('SessionstorageComponent', () => {
  let component: SessionstorageComponent;
  let fixture: ComponentFixture<SessionstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionstorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
