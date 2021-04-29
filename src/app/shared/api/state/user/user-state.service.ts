import { Injectable } from '@angular/core';
import { StateServiceAbstract } from '../../../abstracts/state-abstract.service';
import { Observable } from 'rxjs';
import { ApiService } from '../../http-api/api.service';

interface UserState {
  allUsers: any;
  userById: any;
}

const initialState: UserState = {
  allUsers: null,
  userById: null,
};

@Injectable()
export class UserStateService extends StateServiceAbstract<UserState> {
  public users$: Observable<any> = this.select((state) => state.allUsers);
  public userById$: Observable<any> = this.select((state) => state.userById);

  constructor(private api: ApiService) {
    super(initialState);
    this.fetchData();
  }

  private fetchData(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.api.user
      .getAllUsers()
      .subscribe((allUsers) => this.setState({ allUsers }));
  }

  public getUserById(id: string): void {
    this.api.user
      .getUserById(id)
      .subscribe((userById) => this.setState({ userById }));
  }
}
