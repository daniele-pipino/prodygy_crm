import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-modify-offer',
  templateUrl: './modify-offer.component.html',
  styleUrls: ['./modify-offer.component.css'],
})
export class ModifyOfferComponent implements OnInit {
  @Input() offer: any;
  @Output() update: EventEmitter<string> = new EventEmitter();
  constructor(private offerService: OffersService) {}

  modifyOfferForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
  });

  modifyOffer() {
    const data = this.modifyOfferForm.value;
    this.offerService.modifyOffer(data, this.offer.id);
    this.update.emit('update');
  }

  ngOnInit(): void {
    if (this.offer) {
      this.modifyOfferForm.patchValue(this.offer);
    }
  }
}
