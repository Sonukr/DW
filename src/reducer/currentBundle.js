import {SetCurrentBundle} from '../actions/setCurrentBundle';


const initialState = {};

export function currentBundle (state = initialState ,action) {
  switch (action.type) {
    case SetCurrentBundle.typeName():
      return action.payload;
    default:
      return state;
  }
}