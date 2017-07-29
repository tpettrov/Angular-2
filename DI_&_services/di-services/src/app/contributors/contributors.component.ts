/**
 * Created by Toni on 7/29/2017.
 */
import {Component, Input} from '@angular/core';
import {Contributor} from '../contributors/contributor.model';

@Component({
  selector:'contributors',
  templateUrl:'./contributors.component.html',
})

export class ContributorsContainerComponent {

  @Input() contributor: Contributor[]

}
