/* 3rd party libraries */
import { Injectable } from '@angular/core';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */


@Injectable({
  providedIn: 'root'
})
export abstract class HttpBaseService {

  private _apiUrl: string;

  constructor(apiRoot: string, path: string) {
    this._apiUrl = `${apiRoot}/${path}`;
  }

  protected get apiUrl(): string {
    return this._apiUrl;
  }
  
}
