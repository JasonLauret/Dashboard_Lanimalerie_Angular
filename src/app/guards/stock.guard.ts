import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockGuard implements CanActivate {

  constructor(private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let isloggedin:any;
      let loggedUser:any;

      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');

      if(isloggedin == "true" && loggedUser){
        return true;
      }else {
        this.router.navigate(['forbidden']);
        return false;
      }
  }
  
}
