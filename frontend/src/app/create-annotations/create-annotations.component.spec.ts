import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnotationsComponent } from './create-annotations.component';

describe('CreateAnnotationsComponent', () => {
  let component: CreateAnnotationsComponent;
  let fixture: ComponentFixture<CreateAnnotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnnotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
