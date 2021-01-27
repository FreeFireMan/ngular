
import {Component, OnInit} from '@angular/core';
import {Post} from 'src/app/models/Post';
import {PostService} from '../../services/post.service.';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] ;
  singlePost: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getAllPost()
      .subscribe((value: Post[]) => {
        this.posts = value;
      });
  }

  getBubble(post: Post): void {
    this.singlePost = post;
  }

}
