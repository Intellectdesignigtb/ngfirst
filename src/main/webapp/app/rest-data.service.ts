import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestDataService {

  constructor(private http: Http) { }

  post(entities) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = "http://localhost:8080/RestWSDemo/rest/legalentity/";
    this.http.post(url, entities, {headers: headers}).map(res => res.json()).subscribe();
  }
}
