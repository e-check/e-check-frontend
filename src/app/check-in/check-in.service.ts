import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CheckInService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private checkinUrl = 'http://localhost:3000/checkin';  // URL to web api

  constructor(private http: Http) {
  }

  create(form_id: string, name: string, cellphone: string): Promise<any> {
    var json_data = {
      "form_id": form_id,
      "name": name,
      "cellphone": cellphone
    }

    return this.http
      .post(this.checkinUrl, JSON.stringify(json_data), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getFormEntry(form_id: string, cellphone: string) {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
