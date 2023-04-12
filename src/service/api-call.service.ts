import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  angularURL: string = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=';
  reactURL: string = 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=';
  vueJsURL: string = 'https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=';

  constructor(private http: HttpClient) { }

  getAngularItems(pageNumber: number = 0): Observable<any> {

    return this.http.get(this.angularURL + pageNumber);

  }

  getReactItems(pageNumber: number = 0): Observable<any> {

    return this.http.get(this.reactURL + pageNumber);

  }

  getVueItems(pageNumber: number = 0): Observable<any> {
    return this.http.get(this.vueJsURL + pageNumber);
  }

}
