import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= '/api';
  constructor(private http: HttpClient) { }
  
    // get users
    getUsers(){
      return this.http.get(this.url);
    }

      //get an user
  getAnUser(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //  add user
  addUser(user: User)
  {
    return this.http.post(this.url, user);
  }

  // delete user
  deleteUser(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  // edit User
  editUser(id:string, user: User){
    return this.http.put(this.url+'/'+id, user);
  }
}
export interface User{
  id_user?: string;
  userName?: string;
  userLastName?: string;
  userEmail ?: string;
  userDNI ?: number;
  userPhoto?: string;
}