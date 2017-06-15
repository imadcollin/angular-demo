import { ProductService } from './services/product.service';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; 
@Component({
  selector: 'app-root',
  template: ` <app-home></app-home>     
  `,
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title = 'app works!';
}
