import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private _http: HttpClient) {}

  url: string = 'http://localhost:3000';
  getOffers() {
    return this._http.get(`${this.url}/offers`);
  }

  createOffer(obj: object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/create/client/${id}/offer`, body, {
        headers: headers,
      })
      .subscribe();
  }

  modifyOffer(obj: object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .put(`${this.url}/modify/offer/${id}`, body, {
        headers: headers,
      })
      .subscribe();
  }

  deleteOffer(id: number) {
    this._http.delete(`${this.url}/delete/offer/${id}`).subscribe();
  }
}
