/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import * as pages from './pages';


const routes: Routes = [
  {
    path: '',
    component: pages.HomePage
  },
  {
    'path': 'about-the-project',
    component: pages.AboutPage
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
