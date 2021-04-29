import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// api
import { ApiService } from './http-api/api.service';
import { PostsApiService } from './http-api/posts/posts-api.service';
import { UserApiService } from './http-api/users/user-api.service';

// state
import { PostsStateService } from './state/posts/posts-state.service';
import { UserStateService } from './state/user/user-state.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ApiService,
    PostsApiService,
    UserApiService,

    PostsStateService,
    UserStateService,
  ],
})
export class ApiModule {}
