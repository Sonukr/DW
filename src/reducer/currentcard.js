import {SetCurrentCard} from '../actions/setCurrentCard';


const initialState = {};

export function currentCard (state = initialState ,action) {
  switch (action.type) {
    case SetCurrentCard.typeName():
      return action.payload;
    default:
      return state;
  }
}