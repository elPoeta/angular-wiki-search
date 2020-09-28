import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface WikiSearchResponse {
  query: {
    search: {
      title: string,
      pageid: number,
      snippet: string,
      wordcount: number
    }[]
  }
}

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
    return this.http.get<WikiSearchResponse>(this.baseUrl, {
      params
    })
      .pipe(pluck('query', 'search'));
  }
}
