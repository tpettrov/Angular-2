/**
 * Created by Toni on 7/28/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const urlProfile: string = 'https://api.github.com/users/gavofyork';
const urlFollowers: string = 'https://api.github.com/users/{username}/followers';

@Injectable()
export class HomeData {
  constructor (private http: Http) { }
  getDataProfile () : Promise<object> {
    return this.http
      .get(urlProfile)
      .toPromise()
      .then(resp => resp.json())
      .catch(err => { console.log(err); return []});
  }
  getDataFollowers () : Promise<object> {
    return this.http
      .get(urlFollowers)
      .toPromise()
      .then(resp => resp.json())
      .catch(err => { console.log(err); return []});
  }
}
