// post-form.component.ts

import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  content: string = '';
  imageUrl: string = '';
  rating: number = 0;

  constructor(private postService: PostService, private snackBar: MatSnackBar, private router: Router) {}

  submitPost() {
    if (this.content.trim()) {
      const postData = {
        content: this.content,
        imageUrl: this.imageUrl,
        rating: this.rating
      };
      this.postService.addPost(postData).subscribe(
        (response: any) => {
          if (response && response.id) {
            const postId = response.id; // ID-ul postului creat
            this.snackBar.open('Post added successfully!', 'Close', { duration: 3000 });
            this.router.navigate(['/details', postId]); // Navighează către pagina de detalii cu ID-ul postului creat
            this.content = '';
            this.imageUrl = '';
            this.rating = 0;
          } else {
            console.error('Invalid response from addPost service:', response);
            // Tratează cazul în care răspunsul nu conține un ID valid
          }
        },
        error => {
          this.snackBar.open('Error adding post!', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.snackBar.open('Please write something!', 'Close', { duration: 3000 });
    }
  }
  

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
