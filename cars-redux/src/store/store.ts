/**
 * Created by Toni on 8/9/2017.
 */
import { createStore } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';

export const store = createStore<IAppState>(reducer);
