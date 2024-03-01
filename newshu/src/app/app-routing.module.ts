/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../features/home').then(m => m.HomeModule),
  },
  {
    path: 'news',
    loadChildren: () => import('../features/all-news').then(m => m.AllNewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
