/**
 * Created by Toni on 7/28/2017.
 */
import { Component } from '@angular/core';
import {Data} from "../Data";
import { Repo } from './repos.model';


@Component({
  selector: 'app-repos-container',
  templateUrl: './reposContainer.component.html',
  styleUrls: ['./reposContainer.component.css']
})


export class ReposContainerComponent {

  repos: Repo[];


  constructor(private data: Data) {}

  fetchRepos () {
    this.data.getDataRepos().then((dataReceived) => {

      this.repos = dataReceived

    })

  }



}
