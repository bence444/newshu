/* 3rd party libraries */
import { Component } from '@angular/core';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'newshu';

}
