import {Component, OnInit} from "@angular/core"
import {CarsService} from "./cars.service"
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'list-cars',
  templateUrl: './list-cars.component.html'

})

export class ListCarsComponent implements OnInit {

  constructor(private carsService: CarsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  page: number = 1;
  cars: Array<Object>;
  searchText: string = '';

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;
      this.searchText = params['search'];
      this.carsService.getListCars(this.page, this.searchText).subscribe((carsReceived) => {
        this.cars = carsReceived;
      });
    });
  }


  showPrevPage() {
    if (this.page === 1) {
      return;
    }
    const url = this.getUrl(this.page - 1);
    this.router.navigateByUrl(url);
  }
  showNextPage() {
    if (this.cars.length === 0) {
      return;
    }
    const url = this.getUrl(this.page + 1);
    this.router.navigateByUrl(url);
  }

  search() {
    this.router.navigateByUrl(`/cars/all?search=${this.searchText}`);
  }

  getUrl (page) {
    let url = `/cars/all?page=${page}`;
    if (this.searchText) {
      url = `/cars/all?page=${page}&search=${this.searchText}`;
    }
    return url;
  }

}
