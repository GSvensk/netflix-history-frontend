import { Injectable } from '@angular/core';
import { JSONstats } from '../../models/JSONstats.model';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  format(data: JSONstats) {
    data.months.map(month => (month / 60).toFixed(1));
    data.weekdays.map(weekday => (weekday / 60).toFixed(1));
    data.totalTime = data.totalTime / 60
    data.longestBinge = data.longestBinge / 60
    data.mostWatchedSeriesTotalTime = data.mostWatchedSeriesTotalTime / 60
    return data;
  }
}
