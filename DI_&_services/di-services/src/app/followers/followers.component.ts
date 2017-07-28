/**
 * Created by Toni on 7/28/2017.
 */
import { Component } from '@angular/core';
import {Data} from "../Data";
import { Follower } from './followers.model';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})


export class FollowersComponent {

  followers: Follower[];

  constructor(private data: Data) {}

  fetchFollowers () {
    this.data.getDataFollowers().then((dataReceived) => {

      this.followers = dataReceived
      console.log(this.followers)
    })

  }


}
