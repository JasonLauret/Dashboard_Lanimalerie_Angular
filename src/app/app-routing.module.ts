import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "api", component: DataFromApiComponent },
  { path: "order", component: OrderComponent },
  { path: "product", component: ProductComponent },
  { path: "client", component: ClientComponent },
  { path: "stock", component: StockComponent },
  { path: "not-found", component: FourOhfourComponent },
  { path: "**", redirectTo:"not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
