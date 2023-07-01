import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  user: User = {
    id_user: '',
    userName: '',
    userLastName: '',
    userEmail: '',
    userDNI: 0,
    userPhoto: '',
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {

    const enter_id = <string>this.activeRoute.snapshot.params['id'];
    console.log('enter id: '+enter_id);

    if(enter_id){
      this.userService.getAnUser(enter_id)
      .subscribe({
        next: (data: any) => {
          this.user = data[0]
          console.log(data[0]);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
    
  edit() {
    if (this.user.id_user) {
      this.userService.editUser(this.user.id_user, this.user)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (err) => {
            console.log(err);
          },
        });
      this.router.navigate(['/home']);
    } else {
      console.log('ID de usuario no válido');
    }
  }
}

