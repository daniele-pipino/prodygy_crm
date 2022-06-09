import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmalComponent } from './send-emal.component';

describe('SendEmalComponent', () => {
  let component: SendEmalComponent;
  let fixture: ComponentFixture<SendEmalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEmalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
