import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'; //call to services (Http)
import { Convocatory } from '../models/convocatory';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConvocatoryService {

  private convocatoryUrl = 'api/convocatories';  // URL to web api //TODO: This could be moved to DEV property

  constructor(private http: Http) { }

  //Get all convocatories
  //TODO: Pagination?
  get(): Promise<Convocatory[]> {
  return this.http.get(this.convocatoryUrl)
             .toPromise()
             .then(response => response.json().data as Convocatory[])
             .catch(this.handleError);
 }
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  buildHeader(headers: Headers) {
    headers = new Headers({'Content-Type': 'application/json'});
  }

}
