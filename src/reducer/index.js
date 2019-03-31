import { combineReducers } from 'redux';

import { initialData } from './data';
import { baseView } from './baseView';
import { currentBundle } from './currentBundle';
import { currentCard } from './currentcard';


export const Reducer = combineReducers({
    /* your app’s top-level reducers */
    data: initialData,
    baseView: baseView,
    currentBundle: currentBundle,
    currentCard: currentCard
});