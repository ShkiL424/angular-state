import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsStateService } from '../../../../shared/api/state/posts/posts-state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public allPosts$: Observable<any> = this.postsState.allPosts$;
  public postById$: Observable<any> = this.postsState.postById$;

  constructor(private postsState: PostsStateService) {}

  ngOnInit(): void {
    this.postsState.getPostById('4');

    setTimeout(() => this.postsState.getPostById('10'), 4000);
  }
}
