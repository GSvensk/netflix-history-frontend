import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JSONstats } from '../parser/JSONstats.model';

import fakeStats from '../../assets/fakeStats.json';
import { FormatService } from './format-service/format.service';

class req {
  items: Map<string, string>;
  constructor(body: Map<string, string>) {
    this.items = body;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  stats: Observable<JSONstats> = of(null);
  titlesConsumed: Observable<number> = of(null);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient, private formatter : FormatService) { }
  
  get titlesWatched() {
    return this.titlesConsumed;
  }

  readFakeResults() {
    const formattedFakeStats = this.formatter.format(fakeStats);
    this.stats = of(formattedFakeStats);
  }

  getResults(title: Map<string, string>) {
    const items = new req(title);
    console.log(items);
    return this.http.post("http://localhost:8080/statistics", title, this.httpOptions);
    // https://netflix-activity-api.herokuapp.com/parse
  }
}
