import {Injectable} from '@angular/core';
import {HttpService} from '../common/http.service';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}
  register (user) {
    return this.httpService.post('auth/signup', user);
  }
}
