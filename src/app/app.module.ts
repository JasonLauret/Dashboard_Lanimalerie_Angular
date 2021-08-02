import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';
import { CardComponent } from './card/card.component';
import { CardTwoComponent } from './card-two/card-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockComponent,
    OrderComponent,
    CardComponent,
    CardTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
