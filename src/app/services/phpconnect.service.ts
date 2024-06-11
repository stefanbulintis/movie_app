import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhpConnectService {
  private apiUrl = 'http://localhost/movieapp/index.php'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_users.php`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_user.php`, user);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_posts.php`);
  }

  addPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_post.php`, postData);
  }
}
