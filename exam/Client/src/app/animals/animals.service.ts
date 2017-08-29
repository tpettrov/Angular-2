import {Injectable} from "@angular/core"
import {HttpService} from '../common/http.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AnimalsService {
  constructor(private http: HttpService ) {}

  addAnimal(car): any {
    return this.http.post('animals/create', car, true);
  }
  getListAnimals(page, searchText = null): any {
    let url = `animals/all?page=${page}`;
    if (searchText) {
      url = `${url}&search=${searchText}`;
    }
    return this.http.get(url, true);
  }
  getAnimalbyId(id): any {
    return this.http.get(`animals/details/${id}`, true);
  }
  reactToAnimal(id, reactionString): any {
    const reactionData = {type: reactionString};
    return this.http.post(`animals/details/${id}/reaction`, reactionData, true);
  }
  commentToAnimal(id, commentString): any {
    const commentData = {message: commentString};
    return this.http.post(`animals/details/${id}/comments/create`, commentData, true);
  }
  getComments(id): any {
    return this.http.get(`animals/details/${id}/comments`, true);
  }
  getUserAnimals(): any {
    return this.http.get(`animals/mine`, true);
  }
  deleteAnimal(id): any {
    return this.http.post(`animals/delete/${id}`, {}, true);
  }
}
