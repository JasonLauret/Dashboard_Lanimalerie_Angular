import { Component, OnInit } from '@angular/core';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string = "Bienvenue sur la page commande";
  numberOfOrders:any;

  constructor(private connexionApi:ConnexionApiService) { }

  ngOnInit(): void {
    this.connexionApi.getOrders().subscribe(data =>{this.numberOfOrders = data['hydra:member']});
  }
}
