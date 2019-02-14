import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  results: any[];

  constructor(private searchService: SearchService) {
  }
  doSearch(query: string) {
    this.searchService.search(query)
      .subscribe((results: any[]) => {
        this.results = results;
      });
  }
}
