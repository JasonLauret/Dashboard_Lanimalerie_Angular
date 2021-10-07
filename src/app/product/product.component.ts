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

  occurrences:any = { };
  i:any;
  count(){
    let j = this.responses.length;
    for (this.i = 0; this.i < j; this.i++) {
      this.occurrences[this.responses[this.i]] = (this.occurrences[this.responses[this.i]] || 0) + 1;
    }
  }
}
