import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  user: User={
  id_user: '',
  userName: '',
  userLastName: '',
  userEmail: '',
  userDNI: 0,
  userPhoto: ''
  }
  constructor(private userService: UserService, private router:Router) { }

  add(){
    delete this.user.id_user;

    this.userService.addUser(this.user)
    .subscribe();
    this.router.navigate(['/home']);
  }

}
