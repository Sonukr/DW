import type { Action } from '../interfaces/action';

export const TYPE_NAME='SET_DATA_FROM_API';

export class SetData implements Action {
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