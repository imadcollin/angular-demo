import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from "app/home/product-filter";
import { ProductsDetailsComponent } from './products-details/products-details.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
