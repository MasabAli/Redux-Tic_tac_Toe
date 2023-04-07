import {createStore} from 'redux';
import { gameslice } from './action';

const store = createStore(gameslice.reducer);

export default store;