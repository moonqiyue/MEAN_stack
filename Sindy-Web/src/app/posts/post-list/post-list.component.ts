import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'this is the first post\'s content'},
  //   {title: 'Second Post', content: 'this is the Second post\'s content'},
  //   {title: 'Third Post', content: 'this is the Third post\'s content'}
  // ];
  @Input() posts = [];
}
