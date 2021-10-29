import { HttpClient } from '@angular/common/http';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[] = [
    {"username":"jason", "password":"azerty", "roles":["ROLE_ADMIN"]}
  ]
  
  public loggedUser:any;
  public isloggedIn: Boolean = false;
  //public roles:string[];

//   apiURL: string = "http://127.0.0.1:8000/api/user_dashboards"

  constructor(/*private httpClient: HttpClient, */private router:Router) { }

  SignIn(user:User):Boolean{
    let validUser:Boolean=false;
    this.users.forEach((curUser) => {
      if(user.username === curUser.username && user.password == curUser.password){
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        // this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }
  // getUserFromBdd(username:string):Observable<User>{
  //   const url = "${this.apiURL}/${username}";
  //   return this.httpClient.get<User>(url)
  // }

  // signIn(user:User){
  //   this.loggedUser = user.username;
  //   this.isloggedIn = true;
  //   // this.roles = user.roles;
  //   localStorage.setItem('loggeUser', this.loggedUser);
  //   localStorage.setItem('isLoggedIn', String(this.isloggedIn));
  // }

  // isAdmin():Boolean{
  //   let admin: Boolean = false;
  //   if(!this.roles){
  //     return false;
  //   }else{
  //     this.roles.forEach((curRole) => {
  //       if(curRole.role == 'ADMIN'){
  //         admin = true;
  //       }
  //     });
  //   }
    
  //   return admin;
  // }

  logout(){
    this.isloggedIn = false;
    this.loggedUser = undefined;
    // this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/']);
  }

}
