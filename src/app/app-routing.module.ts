import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomeGuard } from './guards/home.guard';
import { OrderGuard } from './guards/order.guard';
import { ProductGuard } from './guards/product.guard';
import { StockGuard } from './guards/stock.guard';
import { UserGuard } from './guards/user.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomePageComponent, canActivate:[HomeGuard] },
  { path: "api", component: DataFromApiComponent },
  { path: "order", component: OrderComponent, canActivate:[OrderGuard] },
  { path: "product", component: ProductComponent, canActivate:[ProductGuard] },
  { path: "user", component: UserComponent, canActivate:[UserGuard] },
  { path: "stock", component: StockComponent, canActivate:[StockGuard] },
  { path: "forbidden", component: ForbiddenComponent },
  { path: "not-found", component: FourOhfourComponent },
  { path: "**", redirectTo:"not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
