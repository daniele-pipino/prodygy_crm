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

  getAllClientData(id: number) {
    return this._http.get(`${this.url}/client/${id}/data`);
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

  modifyClient(obj: object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .put(`${this.url}/modify/client/${id}`, body, {
        headers: headers,
      })
      .subscribe();
  }

  // delete
  deleteClient(id: number) {
    this._http.delete(`${this.url}/delete/client/${id}`).subscribe();
  }
}
