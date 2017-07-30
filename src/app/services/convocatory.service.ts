import 'rxjs/add/operator/toPromise';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Convocatory } from '../models/convocatory';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConvocatoryService {

  private convocatoryUrl = 'api/convocatories';  // URL to web api //TODO: This could be moved to DEV property

  constructor(private http: Http) { }

  //Get all convocatories
  //TODO: Pagination?
  /*get(): Promise<Convocatory[]> {
  return this.http.get(this.convocatoryUrl)
             .toPromise()
             .then(response => response.json().data as Convocatory[])
             .catch(this.handleError);
  }*/
 
  get() : Observable<Convocatory[]> {
  return this.http.get(this.convocatoryUrl)                        
        .map((res:Response) => res.json().data as Convocatory[])
        .catch(this.handleError);
  }

 /*getConvocatory(id: number): Promise<Convocatory> {
  const url = `${this.convocatoryUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Convocatory)
    .catch(this.handleError);
}*/

  getConvocatory(id: number): Observable<Convocatory> {
    const url = `${this.convocatoryUrl}/${id}`;
    return this.http.get(url)
        .map((res:Response) => res.json().data as Convocatory)
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
