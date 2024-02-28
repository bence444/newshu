import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpBaseService {

  private _apiUrl: string;

  constructor(apiRoot: string, path: string) {
    this._apiUrl = `${apiRoot}/${path}`;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }
  
}
