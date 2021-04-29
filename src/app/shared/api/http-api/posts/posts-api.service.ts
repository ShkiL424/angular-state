import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../../../../core/services/base-http.service';

@Injectable()
export class PostsApiService extends BaseHttpService {
  private url = '/posts';

  public getPosts(): Observable<any> {
    return this.get(this.url);
  }

  public getPostById(id: string): Observable<any> {
    return this.get(`${this.url}/${id}`);
  }

  public createPost(user: any): Observable<any> {
    return this.post(this.url, user);
  }
}
