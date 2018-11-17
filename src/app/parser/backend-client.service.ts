import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getResults(title: Map<string, string>) {
    console.log("TJA");
    let items = new req(title);
    console.log(items);
    const obj = [...title].reduce((o, [key, value]) => (o[key] = value, o), {});
    console.log(obj);

    return this.http.post("http://localhost:5000/parse", items, this.httpOptions);
  }
}
