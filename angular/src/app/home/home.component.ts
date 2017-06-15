import { IProduct } from './products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

listFilter:string='A';
products:IProduct[]=[
  {
        "productId": 5,
        "productName": "Hallon",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "tomate, chicken and sallad",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYvMliRVZl_vZYsNv6GZc-GW9eZAb4kzxm7JEZ956_THZERa_ixPZ0x0"
    },
    {
        "productId": 8,
        "productName": "Kebab",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "meat and rice",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYvMliRVZl_vZYsNv6GZc-GW9eZAb4kzxm7JEZ956_THZERa_ixPZ0x0"
    },
     {
        "productId": 5,
        "productName": "Hallon",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "tomate, chicken and sallad",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYvMliRVZl_vZYsNv6GZc-GW9eZAb4kzxm7JEZ956_THZERa_ixPZ0x0"
    }];
  constructor() { }

  ngOnInit() {
  }

}
