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
    this.connexionApi.getOrderProduct().subscribe(data =>{this.totalProductsSold = data['hydra:member']});
    this.connexionApi.getProduct().subscribe(data =>{this.responses = data['hydra:member']});
  }

   /*
  * Pour l'énoncer "Total de produits vendus triés par ordre décroissant(Le produit le plus vendu sera en
  * tête de liste, afficher le nombre d’unités vendues pour chaque produit)" 
  * Parcourir un tableau et compter l'occurence de chaque élément (Ne marche pas)
  */
   countOccurences() {
    var occurrences:any = { };
    for (var i = 0, j = this.totalProductsSold.length; i < j; i++) {
      occurrences[this.totalProductsSold[i]] = (occurrences[this.totalProductsSold[i]] || 0) + 1;
    }
    console.log(occurrences);
    return occurrences;
  }
  
}

