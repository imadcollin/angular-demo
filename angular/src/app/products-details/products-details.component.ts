import { product } from './../home/products';
import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from '../home/products';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  id: number;
  products: IProduct[];
  productMatchID: IProduct;
  private sub: Subscription;
  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router, private _productService: ProductService
  ) { }

  ngOnInit() {
    // let id = +this._activatedRoute.snapshot.params['id'];
    // this._productService.getProducts().subscribe(product => this.products = product);
    // if (this.products != undefined && this.products !== undefined) {
    //   console.log("test");
    //   for (let prod of this.products) {
    //     if (prod.productId == this.id)
    //       this.productMatchID = prod;
    //     console.log("the id is ", this.productMatchID);
    //   }
    // }
 this.sub = this._activatedRoute.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
                console.log("this id is ",id)
        });    
  }
  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(product => this.productMatchID = product);
              console.log("tttttt#",this.productMatchID);

}
  goBack() {
 console.log("inside get",this.productMatchID);

    this._router.navigate(['/home']);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
