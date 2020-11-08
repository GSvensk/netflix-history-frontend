import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JSONstats } from '../../models/JSONstats.model';

import fakeStats from '../../../assets/fakeStats.json';
import { FormatService } from '../format/format.service';
import { EnvService } from '../../env.service';

import { EMPTY } from 'rxjs'

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

  constructor(private http: HttpClient, private formatter: FormatService, private env: EnvService) {}

  readFakeResults() {
    const formattedFakeStats = this.formatter.format(fakeStats);
    this.stats = of(formattedFakeStats);
  }

  getResults(titles: Map<string, string>) {
    return this.http.post(`http://${this.env.apiUrl}/statistics`, titles, this.httpOptions);
  }

  postStatistics(titles: Map<string, string>) {
    return EMPTY;
  }
}
