import { Component, OnDestroy } from '@angular/core';
import {MessageService} from './message.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'message-handler',
  template: '<div *ngIf="message">{{message}}</div>'
})
export class MessageHandlerComponent implements OnDestroy {
  message: string;
  subscription: Subscription;

  constructor(private messageService: MessageService, private router: Router) {
    this.subscription = this.messageService.getMessage().subscribe((message) => {this.message = message; });
    router.events.subscribe((val) => {
        this.message = '';
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
