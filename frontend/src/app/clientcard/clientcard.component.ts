import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() update: EventEmitter<string> = new EventEmitter();
  constructor(private clientService: ClientsService) {}

  isModalVisible: boolean = false;

  //delete clients
  deleteClient(id: number) {
    if (
      confirm(`Vuoi davvero eliminare il cliente ${this.client.business_name}`)
    ) {
      this.clientService.deleteClient(id);
      this.update.emit('update');
    }
  }

  ngOnInit(): void {}
}
