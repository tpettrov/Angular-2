/**
 * Created by Toni on 7/25/2017.
 */
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  private description = '';
  public showDetails(article: any): void {
    this.description = article.description;
  }
}
