import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  id: string;
  constructor(private _activatedRoute: ActivatedRoute,
              private _router:Router  ) { }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];
    this.id = id;
  }
  goBack(){
    this._router.navigate(['/home']);
  }

}
