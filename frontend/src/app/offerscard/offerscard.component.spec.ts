import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferscardComponent } from './offerscard.component';

describe('OfferscardComponent', () => {
  let component: OfferscardComponent;
  let fixture: ComponentFixture<OfferscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
