/* 3rd party libraries */
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

/* globally accessible app code in every feature module */
import { CoreModule, newsApiInterceptor } from 'core';
import { SharedModule } from 'shared';
import { HomeModule } from 'features/home';
import { AllNewsModule } from 'features/all-news';

/* locally accessible feature module code, always use relative path */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridLayout } from './grid/grid.layout';


@NgModule({
  declarations: [
    AppComponent,
    GridLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    CoreModule,
    SharedModule,
    HomeModule,
    AllNewsModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([newsApiInterceptor])),
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
