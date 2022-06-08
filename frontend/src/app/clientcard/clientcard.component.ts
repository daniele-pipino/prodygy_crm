import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/model/client.modul';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clientcard',
  templateUrl: './clientcard.component.html',
  styleUrls: ['./clientcard.component.css'],
})
export class ClientcardComponent implements OnInit {
  @Input()
  client!: Client;
  constructor(private clientService: ClientsService) {}

  //delete clients
  deleteClient(id: number) {
    this.clientService.deleteClient(id);
    window.location.reload();
  }

  ngOnInit(): void {}
}
