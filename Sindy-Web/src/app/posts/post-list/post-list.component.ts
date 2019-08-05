import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'this is the first post\'s content'},
  //   {title: 'Second Post', content: 'this is the Second post\'s content'},
  //   {title: 'Third Post', content: 'this is the Third post\'s content'}
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;
  /* postsService: PostsService; can add public below to avoid this,
  public keyword will automatically created a new property in this to store that*/
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe(); // prevent memmory leak
  }
}
