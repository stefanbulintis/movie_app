import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  email!: string; 
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.authService.isLoggedIn()) {
      console.log("is logged");
      //this.router.navigate(['/dashboard']);
    } else {
      this.authService.login(this.username, this.email, this.password).subscribe(success => {
        console.log(this.username, this.email, this.password)
        if (success) {
          console.log("Succesfully");
          this.router.navigate(['dashboard']);
        } else {
          console.log('Invalid username, email, or password');
        }
      });
    }
  }
  
  goToRegistration(): void {
    this.router.navigate(['/register']);
}
}
