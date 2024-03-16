import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts(3).subscribe({
        next: (posts) => {
        console.log(posts)
        this.posts = posts;
        
        setTimeout(()=>{
          this.isLoading = false;
        },4000);
      },
      error: (err) => {
        this.isLoading = false;
        console.log('Error',err);
      },
    });
  }
}