import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'https://jobs.search.gov/jobs/search.json';
  queryUrl: string = '?query=';

  constructor(private http: Http) { }

  search(query: string) {
    return this.searchEntries(query);
  }

  searchEntries(term): Observable<any> {
    return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .map(res => res.json());
  }
}