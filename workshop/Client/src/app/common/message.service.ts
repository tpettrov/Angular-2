import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  parseMessage(res: any) {
    let firstError = res.message;
    if (res.errors) {
      firstError = Object
        .keys(res.errors)
        .map(k => res.errors[k])[0];
    }
    this.subject.next(firstError);
  }

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
