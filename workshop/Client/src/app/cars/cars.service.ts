import {Injectable} from "@angular/core"
import {HttpService} from '../common/http.service';

@Injectable()
export class CarsService {
  constructor(private http: HttpService ) {}

  add(car): any {
    return this.http.post('cars/create/', car);
  }
}
