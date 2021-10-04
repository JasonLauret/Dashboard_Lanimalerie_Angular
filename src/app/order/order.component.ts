import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string = "Bienvenue sur la page commande";
  numberOfOrders:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/api/orders').subscribe(data =>{this.numberOfOrders = data['hydra:member']});
  }
}
