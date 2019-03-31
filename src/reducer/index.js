import { combineReducers } from 'redux';

import { initialData } from './data'
import { baseView } from './baseView'


export const Reducer = combineReducers({
    /* your app’s top-level reducers */
    data: initialData,
    baseView: baseView
});