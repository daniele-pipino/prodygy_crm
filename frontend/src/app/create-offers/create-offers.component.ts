import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-create-offers',
  templateUrl: './create-offers.component.html',
  styleUrls: ['./create-offers.component.css'],
})
export class CreateOffersComponent implements OnInit {
  //data
  @Input() clientID: number = 0;
  @Output() update: EventEmitter<string> = new EventEmitter();

  //constructor
  constructor(private offersService: OffersService) {}

  newOfferForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
  });

  createOffer() {
    let data = this.newOfferForm.value;
    this.offersService.createOffer(data, this.clientID);
    this.update.emit('update');
  }

  ngOnInit(): void {}
}
