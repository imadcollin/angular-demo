import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from "app/home/product-filter";
import { ProductsDetailsComponent } from './products-details/products-details.component';
import{RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'details',component:ProductsDetailsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
