/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import { AllNewsRoutingModule } from './all-news.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllNewsRoutingModule
  ]
})
export class AllNewsModule { }
