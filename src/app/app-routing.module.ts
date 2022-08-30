import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AboutComponent } from './Pages/about/about.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { CartComponent } from './Pages/cart/cart.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ProductMComponent } from './product-m/product-m.component';
import { ProductComponent } from './product/product.component';
import { SucessComponent } from './sucess/sucess.component';
import { UserListComponent } from './user-list/user-list.component';





const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'adminhome',component:AdminHomepageComponent},
  {path:'userlist',component:UserListComponent},
  {path:'adprod',component:ProductMComponent},
  {path:'success',component:SucessComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
