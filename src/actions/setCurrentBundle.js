import type { Action } from '../interfaces/action';

export const TYPE_NAME='SET_CURRENT_BUNDLE';

export class SetCurrentBundle implements Action {
  +type = TYPE_NAME;

  +payload;

  constructor (payload) {
    this.payload = payload;
  }

  plainAction (){
    return {
      type: this.type,
      payload: this.payload
    };
  }

  static typeName (){
    return TYPE_NAME;
  }
}