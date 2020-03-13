import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private _scrollToService: ScrollToService) { }

  public triggerScrollTo() {

    const config: ScrollToConfigOptions = {
      target: 'spinner'
    };

    this._scrollToService.scrollTo(config);
  }
}
