/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import { components } from './components';



@NgModule({
  declarations: [
    ...components
  ],
  imports: [],
  exports: [   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...components
  ]
})
export class SharedModule { }
