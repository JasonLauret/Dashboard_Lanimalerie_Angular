import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionApiService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/orders');
  }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/users');
  }

  getProduct(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/products');
  }

  getOrderProduct(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/order_products');
  }
}
