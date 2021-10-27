import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(){
    let isloggedin:any;
    let loggedUser:any;

    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');

    if (isloggedin != "true" || !loggedUser){
      this.router.navigate(['forbidden']);
    }else{
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
}
