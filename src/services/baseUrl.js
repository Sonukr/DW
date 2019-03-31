
import { isEmpty } from 'lodash/isEmpty';

export function baseUrl () {
  if (
    process.env.NODE_ENV === 'development' &&
    !isEmpty(process.env.REACT_APP_BACKEND_SERVER_URL) &&
    process.env.REACT_APP_BACKEND_SERVER_URL
  ) {
    return process.env.REACT_APP_BACKEND_SERVER_URL;
  }else{
      throw new Error(
          'Backend server or REACT_APP_BACKEND_SERVER_URL IS NOT SPECIFIED'
      );
  }
}
