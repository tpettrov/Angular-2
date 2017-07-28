import { Component, OnInit } from '@angular/core';
import {HomeData} from "./HomeData";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'profile data';
  profile: object;

  constructor(private data: HomeData) {}

  ngOnInit () {
     this.data.getDataProfile().then((dataReceived) => {

      this.profile = dataReceived;
       console.log(this.profile)
    })

  }


}
