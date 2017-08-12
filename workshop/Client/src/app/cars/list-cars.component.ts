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

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;
      this.carsService.getListCars(this.page).subscribe((carsReceived) => {
        this.cars = carsReceived;
      });
    });
  }


  showPrevPage() {
    if (this.page === 1) {
      return;
    }
    this.router.navigateByUrl(`/cars/all?page=${this.page - 1}`);
  }
  showNextPage() {
    if (this.cars.length === 0) {
      return;
    }
    this.router.navigateByUrl(`/cars/all?page=${this.page + 1}`);
  }
}
