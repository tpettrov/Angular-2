import {Injectable} from '@Angular/core';
import {Car} from '../cars/car.model';

@Injectable()
export class Data {

    getCars() : Promise <Array<Car>> {

    return new Promise((resolve, reject) => {

      resolve(cars);

    });

  }

}


const cars = [
  {
    id: 2,
    make: 'Mazda',
    model: '2',
    date: new Date('2010-03-03'),
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2016-Mazda-2-photo-leak.jpg'
  },
  {
    id: 3,
    make: 'Opel',
    model: 'Vectra',
    date: new Date('2010-03-03'),
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2016-Mazda-2-photo-leak.jpg'
  },
  {
    id: 4,
    make: 'BMW',
    model: '3',
    date: new Date('2010-03-03'),
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2016-Mazda-2-photo-leak.jpg'
  },
  {
    id: 5,
    make: 'Mercedes',
    model: '200C',
    date: new Date('2010-03-03'),
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2016-Mazda-2-photo-leak.jpg'
  },
  {
    id: 6,
    make: 'Toyota',
    model: 'Yaris',
    date: new Date('2010-03-03'),
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2016-Mazda-2-photo-leak.jpg'
  },
  {
    id: 7,
    make: 'Infinity',
    model: 'Q50',
    date: new Date('2010-03-03'),
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/07/2016-Mazda-2-photo-leak.jpg'
  }];


