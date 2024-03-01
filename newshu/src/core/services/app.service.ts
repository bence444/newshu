/* 3rd party libraries */
import { Injectable } from '@angular/core';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */

@Injectable({
  providedIn: 'root'
})
export class AppService {

  get isLightTheme(): boolean {
    return this.body.classList.contains('light-theme');
  }

  get body(): HTMLElement {
    return document.querySelector('body')!;
  }

  changeTheme() {
    this.body.classList.toggle('light-theme');
  }

}
