/* 3rd party libraries */
import { NgModule } from '@angular/core';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import { AllNewsRoutingModule } from './all-news.routing';



@NgModule({
  declarations: [],
  imports: [
    AllNewsRoutingModule
  ]
})
export class AllNewsModule { }
