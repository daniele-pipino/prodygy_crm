import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client.modul';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
})
export class ClientlistComponent implements OnInit {
  clients: Array<Client> = [];
  constructor(private clientsService: ClientsService) {}

  getClients() {
    this.clientsService.getClients().subscribe((res: any) => {
      this.clients = res.data;
    });
  }

  update(event: string) {
    this.getClients();
  }

  ngOnInit(): void {
    this.getClients();
  }
}
