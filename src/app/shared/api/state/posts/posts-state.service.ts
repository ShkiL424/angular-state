import { Injectable } from '@angular/core';
import { StateServiceAbstract } from '../../../abstracts/state-abstract.service';
import { Observable } from 'rxjs';
import { ApiService } from '../../http-api/api.service';

interface PostState {
  allPosts: any;
  postById: any;
}

const initialState: PostState = {
  allPosts: null,
  postById: null,
};

@Injectable()
export class PostsStateService extends StateServiceAbstract<PostState> {
  public readonly allPosts$: Observable<any> = this.select(
    (state) => state.allPosts
  );
  public readonly postById$: Observable<any> = this.select(
    (state) => state.postById
  );

  constructor(private api: ApiService) {
    super(initialState);
    this.fetchData();
  }

  private fetchData(): void {
    this.getAllPosts();
  }

  public getAllPosts(): void {
    this.api.post
      .getPosts()
      .subscribe((allPosts) => this.setState({ allPosts }));
  }

  public getPostById(id: string): void {
    this.api.post
      .getPostById(id)
      .subscribe((postById) => this.setState({ postById }));
  }
}
