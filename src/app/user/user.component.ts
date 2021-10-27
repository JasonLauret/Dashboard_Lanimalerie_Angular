import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title:string = "Bienvenue sur la page des utilisateurs";
  users:any;

  constructor(private connexionApi: ConnexionApiService, public authService:AuthService) { }

  ngOnInit(): void {
    this.connexionApi.getUsers().subscribe(data => {this.users = data['hydra:member']});
  }

  // a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]; 
  // result:any = {}; 
  // i:any;

  // count(){
  //   for(this.i = 0; this.i < this.a.length; ++this.i) { 
  //     if(!this.result[ this.a[this.i]]) {
  //       this.result[ this.a[this.i]] = 0; 
  //       ++this.result[ this.a[this.i]]; 
  //     }
  //   }
    
  // }


}
