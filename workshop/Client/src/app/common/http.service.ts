import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:5000/';
const headers = new Headers({
  'Content-Type': 'application/json'
  }
);
const reqOptions = new RequestOptions({headers: headers});

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }



  post(url, data) {
    return this.http
      .post(`${baseUrl}${url}`, JSON.stringify(data), reqOptions)
      .map(res => res.json());
  }
}
