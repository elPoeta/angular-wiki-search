import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term: string = ''
  @Output() value = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.value.emit(this.term);
  }

}
