import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  movie: any;
  newComment: string = '';
  comments: { text: string, date: Date }[] = [];


 
  movies = [
    { id: 1, name: 'The Vampire Diaries', year: 2009, genre: 'Drama, Fantasy, Horror', rating: 8.2, imageUrl: 'assets/tvd.jpg', trailerUrl: 'https://www.youtube.com/embed/BF7XdpzyM1M' },
    { id: 2, name: 'John Wick', year: 2014, genre: 'Action, Crime, Thriller', rating: 7.4, imageUrl: 'assets/jw.jpg', trailerUrl: 'https://www.youtube.com/embed/2AUmvWm5ZDQ' },
    { id: 3, name: 'Prison Break', year: 2005, genre: 'Action, Crime, Drama', rating: 8.3, imageUrl: 'assets/pb.jpg', trailerUrl: 'https://www.youtube.com/embed/AL9zLctDJaU' },
    { id: 4, name: 'Oppenheimer', year: 2023, genre: 'Biography, Drama, History', rating: 8.9, imageUrl: 'assets/open.jpg', trailerUrl: 'https://www.youtube.com/embed/bK6ldnjE3Y0' },
    { id: 5, name: 'NFS Inceputuri', year: 2023, genre: 'Action, Adventure', rating: 7.2, imageUrl: 'assets/nfs.jpg', trailerUrl: 'https://www.youtube.com/embed/c3h_PmaiJxg' },
    { id: 6, name: 'Fast and Furious', year: 2001, genre: 'Action, Crime, Thriller', rating: 6.8, imageUrl: 'assets/f&f.jpg', trailerUrl: 'https://www.youtube.com/embed/2TAOizOnNPo' },
  ];
  // postId!: number; // ID-ul postului
  // postDetails: any;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movie = this.movies.find(movie => movie.id === id);
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push({ text: this.newComment, date: new Date() });
      this.newComment = '';
    }
  }
    // this.route.params.subscribe(params => {
    //   this.postId = +params['id']; // Obține ID-ul postului din ruta URL
    //   this.getPostDetails(); // Apelează funcția pentru obținerea detaliilor postului
    // });
  }

  // getPostDetails() {
  //   this.postService.getPostDetails(this.postId).subscribe(
  //     (response: any) => {
  //       this.postDetails = response;
  //     },
  //     error => {
  //       console.error('Error fetching post details:', error);
  //     }
  //   );
  // }
// }
  

