import { Component } from '@angular/core';
import { WikiSearchService } from './wiki-search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wiki-search';
  pages = [];
  constructor(private wiki: WikiSearchService) { }

  handlerSubmit(event: string) {
    console.log(event)
    this.wiki.search(event)
      .subscribe((response: any) => {
        console.log(response.query.search)
        this.pages = response.query.search;
      })

  }
}
