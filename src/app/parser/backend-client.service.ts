import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JSONstats } from '../parser/JSONstats.model';

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

  constructor(private http: HttpClient) { }

  get statistics() {
    return this.stats;
  }

  get titlesWatched() {
    return this.titlesConsumed;
  }

  getResults(title: Map<string, string>) {
    let items = new req(title);
    console.log(items);
    return this.http.post("http://localhost:5000/parse", items, this.httpOptions);
    // https://netflix-activity-api.herokuapp.com/parse
  }
}
