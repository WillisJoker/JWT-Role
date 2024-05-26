import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(request: LoginUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, request);
  }

  register(user: RegisterUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

}


interface RegisterUser {
  userName: string;
  email: string;
  password: string;
  userRole: string;
}

interface LoginUser {
  email: string;
  password: string;
}