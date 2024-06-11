import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  posts: any[] = [];
  @Input() liked: boolean = false;
  collectionImages = [
    { id: 1, url: 'assets/tvd.jpg' },
    { id: 2, url: 'assets/jw.jpg' },
    { id: 3, url: 'assets/pb.jpg' },
    { id: 4, url: 'assets/open.jpg' },
    { id: 5, url: 'assets/nfs.jpg' },
    { id: 6, url: 'assets/f&f.jpg' },
  ];
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(
      (response: any[]) => {
        this.posts = response;
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  goToPost() {
    this.router.navigate(['/postform']);
  }


  toggleLike() {
    this.liked = !this.liked;
  }

  redirectToDetailsPage(imageId: number) {
    this.router.navigate(['/details', imageId]); 
  }
}
