import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AnnotationsService {
  constructor(private _http: HttpClient) {}

  //server url
  url: string = 'http://localhost:3000';

  createAnnotations(obj: object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/create/client/${id}/annotation`, body, {
        headers: headers,
      })
      .subscribe();
  }

  deleteAnnotation(id: number) {
    console.log(id);
    this._http.delete(`${this.url}/annotation/${id}/delete`).subscribe();
  }
}
