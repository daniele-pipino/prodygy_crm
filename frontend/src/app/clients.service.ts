import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/model/client.modul';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private _http: HttpClient) {}

  //server url
  url: string = 'http://localhost:3000';

  // methods

  getClients() {
    return this._http.get(`${this.url}/clients`);
  }

  createNewClient(obj: Client) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/new/client`, body, {
        headers: headers,
      })
      .subscribe();
  }
}
