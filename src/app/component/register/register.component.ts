import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  userRole: string = '';
  constructor(private authService: AuthService, private router: Router) {
  }

  register(): void {
    const requestBody = {
      userName: this.userName,
      email: this.email,
      password: this.password,
      userRole: this.userRole
    };

    this.authService.register(requestBody).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering', error);
      }
    );


  }
}
