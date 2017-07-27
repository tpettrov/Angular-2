import { Component, Output, EventEmitter } from '@angular/core';
import articles from './Data';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private articles = articles;
  @Output() onShowArticle: EventEmitter<any> = new EventEmitter<any>();
  public ShowArticle(article: any) {
    this.onShowArticle.emit(article);
  }
}
