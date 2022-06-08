import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offerscard',
  templateUrl: './offerscard.component.html',
  styleUrls: ['./offerscard.component.css'],
})
export class OfferscardComponent implements OnInit {
  @Input() offer: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.offer);
  }
}
