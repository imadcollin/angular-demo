import { ProductService } from './../services/product.service';
import { IProduct } from './products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listFilter: string = '';
  products: IProduct[];
  constructor(private _productService: ProductService) {

  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(product => this.products = product);
  }

}
