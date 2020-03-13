import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JSONstats } from '../../models/JSONstats.model';

import fakeStats from '../../../assets/fakeStats.json';
import { FormatService } from '../format/format.service';

import { EMPTY } from 'rxjs'

import { environment } from '../../../environments/environment';

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

  constructor(private http: HttpClient, private formatter: FormatService) { }

  readFakeResults() {
    const formattedFakeStats = this.formatter.format(fakeStats);
    this.stats = of(formattedFakeStats);
  }

  getResults(titles: Map<string, string>) {
    return this.http.post("http://localhost:8080/statistics", titles, this.httpOptions);
    // https://netflix-activity-api.herokuapp.com/parse
  }

  postStatistics(titles: Map<string, string>) {
    if (environment.production) {
      console.log("post");
      return this.http.post("http://localhost:8080//archive/statistics", titles, this.httpOptions);
    }
    return EMPTY;
  }
}
