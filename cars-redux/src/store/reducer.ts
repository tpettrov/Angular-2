/**
 * Created by Toni on 8/9/2017.
 */
import { Car } from '../cars/car.model';
import { IAppState } from './IAppState';

const initialState: IAppState = {
  carsHome: []
}

function getCars(state, action): IAppState {
  return Object.assign({}, state, {
    carsHome: action.cars
  });
}


export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CARS/HOME':
      return getCars(state, action);
    default:
      return state;
  }

}
