import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEestimatesComponent } from './modify-eestimates.component';

describe('ModifyEestimatesComponent', () => {
  let component: ModifyEestimatesComponent;
  let fixture: ComponentFixture<ModifyEestimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEestimatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEestimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
