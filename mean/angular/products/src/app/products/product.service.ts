import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: Array<Product>= [new Product("test product", "test product", 34, 56)];
  constructor() { }

  getProducts() {
    return this.products;
  }

  createProduct(newProduct) {
    this.products.push(newProduct);
  }

  removeProduct(index) {
    this.products.splice(index, 1);
  }
}
