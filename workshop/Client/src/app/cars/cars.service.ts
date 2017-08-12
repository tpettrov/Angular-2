import {Injectable} from "@angular/core"
import {HttpService} from '../common/http.service';

@Injectable()
export class CarsService {
  constructor(private http: HttpService ) {}

  addCar(car): any {
    return this.http.post('cars/create', car, true);
  }

  getListCars(page): any {
    return this.http.get(`cars/all?page=${page}`, false );
  }
}
