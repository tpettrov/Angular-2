import {Injectable} from "@angular/core"
import {HttpService} from '../common/http.service';

@Injectable()
export class CarsService {
  constructor(private http: HttpService) {
  }

  addCar(car): any {
    return this.http.post('cars/create', car, true);
  }

  getListCars(page, searchText = null): any {
    let url = `cars/all?page=${page}`;
    if (searchText) {
      url = `${url}&search=${searchText}`;
    }
    return this.http.get(url, false);
  }

  getCarbyId(id): any {
    return this.http.get(`cars/details/${id}`, true);
  }
}
