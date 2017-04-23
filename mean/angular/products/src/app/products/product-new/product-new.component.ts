import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  public newProduct: Product = new Product();

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._productService.createProduct(this.newProduct);
    this.newProduct = new Product();
  }
}
