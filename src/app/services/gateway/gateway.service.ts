import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JSONstats } from '../../models/JSONstats.model';

import fakeStats from '../../../assets/fakeStats.json';
import { FormatService } from '../format/format.service';
import { environment } from '../../../environments/environment';

import { EMPTY } from 'rxjs';
import { Entry } from '../parse/entry.model';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  stats: Observable<JSONstats> = of(null);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private formatter: FormatService) {}

  readFakeResults() {
    const formattedFakeStats = this.formatter.format(fakeStats);
    this.stats = of(formattedFakeStats);
  }

  getResults(titles: Array<Entry>) {
    return this.http.post(`${environment.apiUrl}/statistics`, titles, this.httpOptions);
  }

  postStatistics(titles: Map<string, string>) {
    return EMPTY;
  }
}
