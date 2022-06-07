import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/model/client.modul';

@Component({
  selector: 'app-clientcard',
  templateUrl: './clientcard.component.html',
  styleUrls: ['./clientcard.component.css'],
})
export class ClientcardComponent implements OnInit {
  @Input()
  client!: Client;
  constructor() {}

  ngOnInit(): void {
    console.log(this.client);
  }
}
