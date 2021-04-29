import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public get(relativeUrl: string, options?: any): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl, options).pipe(retry(1));
  }

  public post(relativeUrl: string, body?: any, options?: any): Observable<any> {
    return this.http.post(this.baseUrl + relativeUrl, body, options);
  }
}
