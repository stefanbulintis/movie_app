import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSelectModule } from '@angular/material/select'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!: string;
  email!: string;
  password!: string;
  role: string = 'user'; // Implicit, utilizatorul se înregistrează ca utilizator obișnuit

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // this.authService.register(this.username, this.email, this.password, this.role).subscribe(success => {
    //   if (success) {
    //     this.router.navigate(['/dashboard']); // Redirecționează către pagina principală după înregistrare
    //   } else {
    //     console.log('Registration failed');
    //   }
    // });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
}}
