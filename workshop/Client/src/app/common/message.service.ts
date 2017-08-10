import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
