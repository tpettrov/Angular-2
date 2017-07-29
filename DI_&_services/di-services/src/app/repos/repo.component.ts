/**
 * Created by Toni on 7/29/2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Repo} from './repos.model';


@Component({
  selector: 'single-repo',
  templateUrl: './repo.component.html'
})

export class SingleRepoComponent {

  @Input() repo: Repo;

  @Output() onFetchContributorsData = new EventEmitter<object>();

  fetchContributorsData(repo_name: string, repo_owner: string) {
    this.onFetchContributorsData.emit({repo_name, repo_owner});
  }




}
