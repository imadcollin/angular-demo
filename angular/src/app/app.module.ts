import { detailGuarService } from './services/details.guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from "app/home/product-filter";
import { ProductsDetailsComponent } from './products-details/products-details.component';
import{RouterModule} from '@angular/router';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    ProductsDetailsComponent,
    FooterComponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'details/:id',canActivate:[detailGuarService],component:ProductsDetailsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}

    ])
  ],
  providers: [detailGuarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
