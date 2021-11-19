import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionApiService {
  apiUrl = environment.apiUrl; 

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any> {
    return this.httpClient.get<any>( this.apiUrl + '/api/orders');
  }

  getOrderProduct(): Observable<any> {
    return this.httpClient.get<any>( this.apiUrl + '/api/order_products');
  }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>( this.apiUrl + '/api/users');
  }

  getProduct(): Observable<any> {
    return this.httpClient.get<any>( this.apiUrl + '/api/products');
  }

  getUserDashboard(): Observable<any> {
    return this.httpClient.get<any>( this.apiUrl + '/api/user_dashboards');
  }

  getStatistical(): Observable<any> {
    return this.httpClient.get<any>( this.apiUrl + '/api/statisticals');
  }
  
}
