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
  isLoading = false
  constructor(private wiki: WikiSearchService) { }

  handlerSubmit(event: string) {
    this.isLoading = !this.isLoading;
    this.wiki.search(event)
      .subscribe((response: any) => {
        console.log(response.query.search)
        this.isLoading = !this.isLoading;
        this.pages = response.query.search;
      })

  }
}
