import {Component, OnInit} from "@angular/core";
import {AnimalsService} from "./animals.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'list-animals',
  templateUrl: './list-animals.component.html'
})

export class ListAnimalsComponent implements OnInit {

  constructor(private animalService: AnimalsService,
              private router: Router,
              private route: ActivatedRoute) {}

  page: number = 1;
  animals: Array<Object>;
  searchText: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;
      this.searchText = params['search'];
      this.animalService.getListAnimals(this.page, this.searchText).subscribe((animalsReceived) => {
        this.animals = animalsReceived;
      });
    });
  }

  search() {
    this.router.navigateByUrl(`/animals/all?search=${this.searchText}`);
  }

  showPrevPage() {
    if (this.page === 1) {
      return;
    }
    const url = this.getUrl(this.page - 1);
    this.router.navigateByUrl(url);
  }
  showNextPage() {
    if (this.animals.length === 0) {
      return;
    }
    const url = this.getUrl(this.page + 1);
    this.router.navigateByUrl(url);
  }

  getUrl (page) {
    let url = `/animals/all?page=${page}`;
    if (this.searchText) {
      url = `/animals/all?page=${page}&search=${this.searchText}`;
    }
    return url;
  }

}
