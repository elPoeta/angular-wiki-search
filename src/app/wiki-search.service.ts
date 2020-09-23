import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {
  private baseUrl: string = `https://en.wikipedia.org/w/api.php?`;
  constructor(private http: HttpClient) { }

  search(term: string) {
    const params = {
      action: "query",
      list: "search",
      srsearch: term,
      format: "json",
      origin: '*'
    }
    return this.http.get(this.baseUrl, {
      params
    });
  }
}
