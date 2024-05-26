import { Component, OnInit } from '@angular/core';
import { ManagerComponent } from '../manager/manager.component';
import { UserComponent } from '../user/user.component';
import { RouterModule } from '@angular/router';
import { RoleService } from '../../service/role.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ManagerComponent, UserComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private roleService: RoleService) { }
  role: String = '';
  ngOnInit(): void {
    this.getRole();
  }

  public getRole(): void {
    this.roleService.getRole().subscribe(
      (response: String) => {
        this.role = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
