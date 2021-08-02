import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';
import { OrderClientComponent } from './order-client/order-client.component';
import { NumberNewClientsComponent } from './number-new-clients/number-new-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockComponent,
    OrderComponent,
    OrderClientComponent,
    NumberNewClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
