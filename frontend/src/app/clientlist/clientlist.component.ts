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

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((res: any) => {
      this.clients = res.data;
    });
  }
}
