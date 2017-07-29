/**
 * Created by Toni on 7/29/2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Repo} from './repos.model';
import {Contributor} from '../contributors/contributor.model';
import {Data} from "../Data";

@Component({
  selector: 'single-repo',
  templateUrl: './repo.component.html'
})

export class SingleRepoComponent {

  constructor(private data: Data) {}

  @Input() repo: Repo;
  contributors: Contributor[];

  @Output() onFetchContributorsData = new EventEmitter<object>();

  fetchContributorsData(repo_name: string, repo_owner: string){

    this.data.getDataRepoContributors(repo_name, repo_owner).then((dataReceived) => {

      this.contributors = dataReceived;
      console.log(dataReceived)
    })


  }

}
