import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule , } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FloatLabelModule, CommonModule, FormsModule, PasswordModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})


export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Fungsi login
  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Login gagal. Periksa username dan password.';
      }
    });
  }
}
