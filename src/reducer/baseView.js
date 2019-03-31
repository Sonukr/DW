import {SetBaseView} from '../actions/setBaseView';


const initialState = '"increase_opportunity"';

export function baseView (state = initialState ,action) {
  switch (action.type) {
    case SetBaseView.typeName():
      return action.payload;
    default:
      return state;
  }
}