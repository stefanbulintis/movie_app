import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/movieapp/index.php';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post<any>('/register', { username, email, password, role });
  }

  login(username: string, email: string, password: string, ): Observable<boolean> {
    localStorage.removeItem('currentGame');

    localStorage.clear();
    return this.http.post<any>(this.apiUrl, { username, email, password }).pipe(
      map(response => {
        console.log(username, email, password)
        if (response && response.success) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Error logging in:', error);
        return of(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
