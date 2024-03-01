/* 3rd party libraries */
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

/* globally accessible app code in every feature module */
import { AppService } from 'core';

/* locally accessible feature module code, always use relative path */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menus = [
    { text: 'Főoldal', route: '/home' },
    { text: 'Keresés', route: '/news' },
  ];

  activeRoute: string = '';

  get icon(): string {
    return this.app.isLightTheme ? 'mode_night' : 'sunny';
  }

  constructor(
    readonly router: Router,
    private readonly app: AppService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  changeTheme() {
    this.app.changeTheme();
  }

}
