import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
