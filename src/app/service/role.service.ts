import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:8080/api/role'

  constructor(private http: HttpClient) { }

  getRole(): Observable<String> {
    return this.http.get<String>(`${this.baseUrl}/user`);
  }
}
