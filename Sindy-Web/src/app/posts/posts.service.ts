import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
// same as when you add in providers array

export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();
  getPosts() {
    // return this.posts;
    // (only copy the reference: address, not actual value)
    return [...this.posts];
    // this copy the actual value, take the posts array all element and put here
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPosts(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]); // copy posts after updated them
  }
}
