import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css'],
})
export class CreateclientComponent implements OnInit {
  constructor(private clientsService: ClientsService) {}
  ngOnInit(): void {}

  newClientForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    company_name: new FormControl(''),
    email: new FormControl(''),
    p_iva: new FormControl(''),
    phone_number: new FormControl(''),
  });

  createNewClient() {
    let newClient = this.newClientForm.value;
    this.clientsService.createNewClient(newClient);
  }
}
