import { Component, OnDestroy } from '@angular/core';
import {MessageService} from './message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'message-handler',
  template: '<div *ngIf="message">{{message}}</div>'
})
export class MessageHandlerComponent implements OnDestroy {
  message: string;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe((message) => {this.message = message; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
