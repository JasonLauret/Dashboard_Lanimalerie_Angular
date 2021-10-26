import { Component, OnInit } from '@angular/core';
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

  // occurrences:any = { };
  // i:any;
  // count(){
  //   let j = this.responses.length;
  //   for (this.i = 0; this.i < j; this.i++) {
  //     this.occurrences[this.responses[this.i]] = (this.occurrences[this.responses[this.i]] || 0) + 1;
  //   }
  // }
  
  // countOccurences() {
  //   let tab:any=[ 9, 9, 9, 6, 6, 3];
  //   let occurrences:any = { };
  //   for (var i = 0, j = tab.length; i < j; i++) {
  //     occurrences[tab[i]] = (occurrences[tab[i]] || 0) + 1;
  //   }
  //   console.log(occurrences); 
  // }

  countOccurences() {
    var occurrences:any = { };
    for (var i = 0, j = this.responses.length; i < j; i++) {
      occurrences[this.responses[i]] = (occurrences[this.responses[i]] || 0) + 1;
    }
    return occurrences;
  }
  
}
