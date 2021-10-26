import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "accueil", component: HomePageComponent },
  { path: "api", component: DataFromApiComponent },
  { path: "order", component: OrderComponent },
  { path: "product", component: ProductComponent },
  { path: "user", component: UserComponent },
  { path: "stock", component: StockComponent },
  { path: "not-found", component: FourOhfourComponent },
  { path: "**", redirectTo:"not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
