/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//#region Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
//#endregion

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import { components } from './components';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...material,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...components,
    ...material
  ]
})
export class SharedModule { }
