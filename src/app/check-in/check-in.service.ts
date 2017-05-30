import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { environment } from 'environments/environment'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CheckInService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private checkinUrl = environment.baseCheckinUrl + 'attendances';  // URL to web api
  private checkIfSignupUrl = environment.baseCheckinUrl;
  constructor(private http: Http) {
  }

  create(activity_id: string, name: string, cellphone: string): Promise<any> {
    var json_data = {
      "activity_id": activity_id,
      "name": name,
      "cellphone": cellphone
    }

    return this.http
      .post(this.checkinUrl, JSON.stringify(json_data), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
  }

  getFormEntry(activity_id: string, cellphone: string): Promise<any> {
    var checkIfSignupUrl = this.checkIfSignupUrl + 'activities/' + activity_id + '/people/' + cellphone;
    return this.http
      .get(checkIfSignupUrl, { headers: this.headers })
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
