import {Injectable} from '@angular/core';
import {HttpService} from '../common/http.service';

@Injectable()
export class StatsService {
  constructor(private httpService: HttpService) {}
  getStats () {
    return this.httpService.get('stats');
  }
}
