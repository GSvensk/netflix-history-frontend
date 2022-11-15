import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JSONstats } from '../../models/JSONstats.model';

import fakeStats from '../../../assets/fakeStats.json';
import { FormatService } from '../format/format.service';
import { StateService } from '../state/state.service';
import { environment } from '../../../environments/environment';

import { ScrollService } from 'src/app/shared/scroller/scroll.service';

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

  constructor(private http: HttpClient, private formatter: FormatService, private state: StateService, private scrollService: ScrollService) {}

  readFakeResults() {
    const formattedFakeStats = this.formatter.format(fakeStats);
    this.stats = of(formattedFakeStats);
  }

  post(titles: Array<Entry>) {
    return this.http.post(`${environment.apiUrl}/statistics`, titles, this.httpOptions);
  }

  get(id: string) {
    return this.http.get(`${environment.apiUrl}/statistics/${id}`, this.httpOptions).subscribe(
      (data: JSONstats) => {
        data = this.formatter.format(data);
        this.stats = of(data);
        this.state.upload();
        this.state.stopLoad();
        this.scrollService.triggerScrollTo();
      },
      error => {
        this.state.stopLoad();
        this.state.removeUpload();
        this.state.fail(error.error.message);
      }
    );
  }
}
