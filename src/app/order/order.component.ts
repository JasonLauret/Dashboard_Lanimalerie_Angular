import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string = "Bienvenue sur la page commande";

  connexion = this.connexionApi.getOrders();

  numberOfOrders:any;
  totalSales:any;


  constructor(private connexionApi:ConnexionApiService) { }

  ngOnInit(): void {
    this.connexion.subscribe(data =>{this.numberOfOrders = data['hydra:member']});
    this.connexion.subscribe(data =>{this.totalSales = data['hydra:member']});
  }

  /*
  * Cette function calcul le montant total des ventes éffectué.
  */
  countTotalSales(){
    let i:number;
    let sum:number = 0;
    for(i = 0; i < this.totalSales.length; ++i){
      sum += this.totalSales[i].total;
    }
    return sum;
  }

  /*
  * Cette function calcul la valeur d'un panier moyen.
  */
  averageBasket(){
    let total:number;
    total = this.countTotalSales() / this.numberOfOrders.length;
    return total;
  }
} 
