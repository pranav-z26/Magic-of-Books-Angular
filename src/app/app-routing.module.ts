import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAftLoginComponent } from './components/dashboard-aft-login/dashboard-aft-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CanActivateGuard } from './guards/can-activate.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"a-dashboard", canActivate:[CanActivateGuard],
    component:DashboardAftLoginComponent
  },
  {
    path:"wishlist",
    component:WishlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
