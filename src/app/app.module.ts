import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AboutComponent } from './Pages/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './user-list/user-list.component';
import { KichenitemsdupliComponent } from './kichenitemsdupli/kichenitemsdupli.component';

import { SucessComponent } from './sucess/sucess.component';
import { ProductMComponent } from './product-m/product-m.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    
    ProductComponent,
         UserListComponent,
         KichenitemsdupliComponent,
         
         SucessComponent,
                   ProductMComponent,
         
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
