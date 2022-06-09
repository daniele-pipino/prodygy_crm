import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/model/client.modul';
import { AnnotationsService } from '../annotations.service';
import { ClientsService } from '../clients.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-client-schedule',
  templateUrl: './client-schedule.component.html',
  styleUrls: ['./client-schedule.component.css'],
})
export class ClientScheduleComponent implements OnInit {
  clientID: any;
  client!: Client;
  annotations: Array<any> = [];
  estimates: Array<any> = [];
  offers: Array<any> = [];

  constructor(
    private router: ActivatedRoute,
    private clientsService: ClientsService,
    private annotationsSevice: AnnotationsService,
    private offersService: OffersService
  ) {}

  modifyClientForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    business_name: new FormControl(),
    email: new FormControl(),
    p_iva: new FormControl(),
    phone: new FormControl(),
  });

  // get all the data
  getData() {
    this.clientsService
      .getAllClientData(this.clientID)
      .subscribe((res: any) => {
        this.client = res.client;
        this.annotations = res.annotations;
        this.offers = res.offers;
        this.estimates = res.estimates;
        this.modifyClientForm.patchValue(this.client);
      });
  }

  modifyClient() {
    const data = this.modifyClientForm.value;
    this.clientsService.modifyClient(data, this.client.id);
    this.getData();
  }

  deleteAnnotation(id: number) {
    if (confirm("Sei sicuro di voler elimanre l'annotazione ?")) {
      this.annotationsSevice.deleteAnnotation(id);
      this.getData();
    }
  }
  deleteOffer(id: number) {
    if (confirm('Sei sicuro di voler elimanre questa offerta?')) {
      this.offersService.deleteOffer(id);
      this.getData();
    }
  }

  update(event: string) {
    this.getData();
  }

  ngOnInit(): void {
    this.clientID = this.router.snapshot.paramMap.get('id');
    this.getData();
  }
}
