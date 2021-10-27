import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OrderGuard } from './guards/order.guard';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomePageComponent },
  { path: "api", component: DataFromApiComponent },
  { path: "order", component: OrderComponent, canActivate:[OrderGuard]},
  { path: "product", component: ProductComponent },
  { path: "user", component: UserComponent },
  { path: "stock", component: StockComponent },
  { path: "forbidden", component: ForbiddenComponent },
  { path: "not-found", component: FourOhfourComponent },
  { path: "**", redirectTo:"not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
