
import axios from 'axios';
import {baseUrl} from './baseUrl';


/**
 * Base API class
 */
export class Api {
  /**
   * HTTP GET
   * @param url
   * @returns {AxiosPromise}
   */
  get (url: string): Promise<any> {
    const absoluteUrl = this.buildAbsoluteUrl(url);
    return axios(absoluteUrl);
  }


  /**
   * Build absolute url by appending Application.baseUrl to url
   * @param {string} url
   * @returns {string} absoluteUrl
   */
  buildAbsoluteUrl (url) {
    return url;
    // return `${this.baseUrl}/${apiUrl}/${url}`;
    // return `${this.baseUrl}/${url}`;
  }

}