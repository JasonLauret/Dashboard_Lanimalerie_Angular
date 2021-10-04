import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title:string = "Bienvenue sur la page produit";
  totalProductsSold:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/api​/order_products').subscribe(data =>{this.totalProductsSold = data['hydra:member']});
  }

}
