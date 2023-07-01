import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listUsers: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        console.log(data);
        this.listUsers = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.loadUsers();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  edit(id: any) {
    this.router.navigate(['/edit/' + id]);
  }
}
