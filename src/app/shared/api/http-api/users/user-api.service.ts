import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../../core/services/base-http.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserApiService extends BaseHttpService {
  private url = '/users';

  public getAllUsers(): Observable<any> {
    return this.get(this.url);
  }

  public getUserById(id: string): Observable<any> {
    return this.get(`${this.url}/${id}`);
  }
}
