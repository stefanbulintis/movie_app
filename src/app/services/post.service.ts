import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost/movieapp/add_post.php'; // Ajustați această adresă URL după cum este necesar

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_posts.php`).pipe(
      catchError(error => {
        console.error('Error fetching posts:', error);
        return throwError(error);
      })
    );
  }

 

  getPostDetails(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_post_details.php?id=${postId}`).pipe(
      catchError(error => {
        console.error('Error fetching post details:', error);
        return throwError(error);
      })
    );
  }
  addPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_post.php`, postData).pipe(
      catchError(error => {
        console.error('Error adding post:', error);
        return throwError(error);
      })
    );
  }
  
  
}
