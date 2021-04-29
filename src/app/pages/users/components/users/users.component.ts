import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStateService } from '../../../../shared/api/state/user/user-state.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users$: Observable<any> = this.userState.users$;
  public userById$: Observable<any> = this.userState.userById$;

  public userId = '4';

  constructor(private userState: UserStateService) {}

  ngOnInit(): void {
    this.userState.getUserById(this.userId);

    setTimeout(() => {
      this.userId = '2';
      this.userState.getUserById(this.userId);
    }, 3000);
  }
}
