/**
 * Created by Toni on 7/28/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Follower } from './followers/followers.model';

const urlProfile: string = 'https://api.github.com/users/gavofyork';
const urlFollowers: string = 'https://api.github.com/users/gavofyork/followers';

@Injectable()
export class Data {
  constructor (private http: Http) { }
  getDataProfile () : Promise<object> {
    return this.http
      .get(urlProfile)
      .toPromise()
      .then(resp => resp.json())
      .catch(err => { console.log(err); return []});
  }
  getDataFollowers () : Promise<Array<Follower>> {
    return this.http
      .get(urlFollowers)
      .toPromise()
      .then(resp => resp.json() as Follower[])
      .catch(err => { console.log(err); return []});
  }
}

//typecasting is still a mystery
