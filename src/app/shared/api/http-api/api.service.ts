import { Injectable } from '@angular/core';
import { UserApiService } from './users/user-api.service';
import { PostsApiService } from './posts/posts-api.service';

@Injectable()
export class ApiService {
  constructor(
    public readonly user: UserApiService,
    public readonly post: PostsApiService
  ) {}
}
