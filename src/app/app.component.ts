import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wiki-search';
  pages = [];
  handlerSubmit(event: string) {
    console.log(event)
  }
}
