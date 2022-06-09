import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstimatesService {
  url: string = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  create(obj: object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/create/client/${id}/estimate`, body, {
        headers: headers,
      })
      .subscribe();
  }

  modify(obj: object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .put(`${this.url}/modify/estimate/${id}`, body, {
        headers: headers,
      })
      .subscribe();
  }

  delete(id: number) {
    this._http.delete(`${this.url}/delete/estimate/${id}`).subscribe();
  }
}
