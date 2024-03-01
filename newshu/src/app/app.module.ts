/* 3rd party libraries */
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/* globally accessible app code in every feature module */
import { CoreModule, newsApiInterceptor } from 'core';
import { SharedModule } from 'shared';

/* locally accessible feature module code, always use relative path */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridLayout } from './grid/grid.layout';


@NgModule({
  declarations: [
    AppComponent,
    GridLayout,
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
  ],
  providers: [
    provideHttpClient(withInterceptors([newsApiInterceptor])),
    provideAnimationsAsync(),
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
