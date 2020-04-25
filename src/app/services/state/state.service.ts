import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  hasUpload: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  titles: Observable<number> = of(0);

  constructor() { }

  upload() {
    this.hasUpload.next(true);
  }

  removeUpload() {
    this.hasUpload.next(false);
  }

  load() {
    this.isLoading.next(true);
  }

  stopLoad() {
    this.isLoading.next(false);
  }

  set numberOfTitles(titles: number) {
    this.titles = of(titles);
  }
}
