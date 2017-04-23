import { NgForm } from '@angular/forms';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  destroy(index) {
    this._productService.removeProduct(index);
  }

}
