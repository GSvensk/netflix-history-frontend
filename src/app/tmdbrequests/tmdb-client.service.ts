import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TmdbClientService {

  API_KEY: string = "8c04c3e5fe547c0b2ec18438737a5dbc";

  constructor(private http: HttpClient) { }

  multiSearch(title: string) {

    return this.http.get("https://api.themoviedb.org/3/search/multi?" +
      "api_key=" + this.API_KEY + "&language=en-US&query=" +
      title + "&page=1&include_adult=false", { observe: 'response' })
  }

  mediasearch(id: string, type: string) {

    return this.http.get("https://api.themoviedb.org/3/" + type + "/"
      + id + "?api_key=" + this.API_KEY +
      "&language=en-US", { observe: 'response' })
  }
}

