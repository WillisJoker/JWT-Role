import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  loginMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (response: any) => {
        this.loginMessage = "success";
        console.log(response.token);
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error => {
        this.loginMessage = "faild";
        console.error(error);
      }
    )
  }
}
