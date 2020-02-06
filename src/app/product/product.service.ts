import { IProduct } from './products';
import { Injectable } from '@angular/core';
import { PRODUCT_ITEMS } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): IProduct[] {
    console.log(this.pItems);
    return this.pItems;
  }

  addProduct(product: IProduct) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  deleteProduct(product) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
    console.log(this.pItems);
  }

  updateProduct(product: IProduct) {
    let pid = +product.id;
    let index = this.pItems.findIndex((p: IProduct) => {

      return p.id === pid;
    });
    this.pItems[index] = product;
  }

}
