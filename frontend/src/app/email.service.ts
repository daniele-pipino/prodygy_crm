import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  url: string = 'http://localhost:3000';

  send(obj: object) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/send/email`, body, {
        headers: headers,
      })
      .subscribe();
  }

  constructor(private _http: HttpClient) {}
}
