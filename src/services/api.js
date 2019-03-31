
import axios from 'axios';


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
    const baseUrl = 'https://app.dataweave.com/v6/app/retailer';
    return `${baseUrl}/${url}`;
  }
}