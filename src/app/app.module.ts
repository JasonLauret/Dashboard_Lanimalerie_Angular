import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { CardComponent } from './card/card.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    CardComponent,
    CardTwoComponent,
    CardThreeComponent,
    SidebarComponent,
    FourOhfourComponent,
    HomePageComponent,
    ProductComponent,
    UserComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
