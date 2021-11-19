import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title:string = "Bienvenue sur la page produit";
  totalProductsSold:any;
  responses:any;
  constructor(private connexionApi:ConnexionApiService) { }

  ngOnInit(): void {
    this.connexionApi.getProduct().subscribe(data =>{this.totalProductsSold = data['hydra:member']});
    this.connexionApi.getOrderProduct().subscribe(data =>{this.responses = data['hydra:member']});
  }

  /*
  * // Parcourir un tableau et compter l'occurence de chaque élément
  */
  countOccurences() {
    var occurrences:any = { };
    for (var i = 0, j = this.responses.length; i < j; i++) {
      occurrences[this.responses[i]] = (occurrences[this.responses[i]] || 0) + 1;
    }
    console.log(occurrences);
    return occurrences;
  }
  
}
