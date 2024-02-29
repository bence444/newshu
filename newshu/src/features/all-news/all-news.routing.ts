/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import * as pages from './pages';


const routes: Routes = [
  {
    path: '',
    component: pages.ListPage
  },
  {
    path: '**',
    redirectTo: '/news'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllNewsRoutingModule { }
