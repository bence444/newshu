/* 3rd party libraries */
import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _isMobile = new BehaviorSubject<boolean>(true);

  constructor(
    platform: Platform,
    observer: BreakpointObserver
  ) {
    if (!platform.ANDROID && !platform.IOS) {
      observer.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.HandsetPortrait
      ]).subscribe(result => {
        this._isMobile.next(result.matches);
      });
    }
  }

  get isMobile(): boolean {
    return this._isMobile.value;
  }

  get isMobile$(): Observable<boolean> {
    return this._isMobile.asObservable();
  }
  
}
