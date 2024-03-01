/* 3rd party libraries */
import { NgModule } from '@angular/core';

/* globally accessible app code in every feature module */
import { SharedModule } from 'shared';

/* locally accessible feature module code, always use relative path */
import { HomeRoutingModule } from './home.routing';
import { pages } from './pages';
import { components } from './components';



@NgModule({
  declarations: [
    ...pages,
    ...components
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
