import { Component, OnInit } from '@angular/core';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title:string = "Bienvenue sur la page des utilisateurs";
  statistical:any;
  test:any;
  userDashboards:any;
  

  constructor(private connexionApi: ConnexionApiService) { }

  ngOnInit(): void {
    this.connexionApi.getStatistical().subscribe(data => {this.statistical = data['hydra:member']});
    this.connexionApi.getUsers().subscribe(data => {this.test = data['hydra:member']});
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
