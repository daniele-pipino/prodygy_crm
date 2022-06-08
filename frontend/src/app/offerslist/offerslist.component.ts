import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offerslist',
  templateUrl: './offerslist.component.html',
  styleUrls: ['./offerslist.component.css'],
})
export class OfferslistComponent implements OnInit {
  offers = [];

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService.getOffers().subscribe((res: any) => {
      this.offers = res.data;
    });
  }
}
