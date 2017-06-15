import { IProduct } from './../home/products';
import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
@Injectable()
export class ProductService {
    private _dataUrl='/assets/data.json'
    constructor(private _http: Http){


    }
    getProducts(): Observable<IProduct[]> {
       return this._http.get(this._dataUrl).map((res:Response)=><IProduct[]> res.json());
       //Error handling should be implemented 
    }
}