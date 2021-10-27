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
  numberOfOrders:any;
  totalSales:any;


  constructor(private connexionApi:ConnexionApiService, public authService:AuthService) { }

  ngOnInit(): void {
    this.connexionApi.getOrders().subscribe(data =>{this.numberOfOrders = data['hydra:member']});

    this.connexionApi.getOrders().subscribe(data =>{this.totalSales = data['hydra:member']});
    
  }
  
  countTotalSales(){
    let i:any;
    let sum:number = 0;
    for(i = 0; i < this.totalSales.length; ++i){
      sum += this.totalSales[i].total;
    }
    return sum;
  }

  // averageBasket(){
  //   let result = this.countTotalSales() / this.numberOfOrders.length;
  //   return result;
  // }

  countTotalSalesMoyen(){
    let i:any;
    for(i = 0; i < this.totalSales.length; ++i){
      this.totalSales[i].total;
    }
    return this.totalSales;
  }
} 
