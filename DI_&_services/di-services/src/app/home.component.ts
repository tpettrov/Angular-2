import { Component, OnInit } from '@angular/core';
import {Data} from "./Data";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'profile data';
  profile: object;

  constructor(private data: Data) {}

  ngOnInit () {
     this.data.getDataProfile().then((dataReceived) => {

      this.profile = dataReceived;

    })

  }


}
