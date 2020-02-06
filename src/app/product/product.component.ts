import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct[];
  productForm: boolean = false;
  newProduct: any = {};
  editedProduct: any = {};
  isNewForm: boolean;
  editProductForm: boolean = false;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this._productService.getProductsFromData();
  }

  showAddProductForm() {
    // resets form if edited product
    if (this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  saveProduct(product: IProduct) {

    if(this.isNewForm) {
      // add a new product
      product.backup = 'Deactivated';
      this._productService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product:IProduct) {
   // this.products.splice(txt, 1)
    console.log(product);
   this._productService.deleteProduct(product);
  }

  showEditProductForm(product: IProduct) {
    if(!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
    this.editedProduct = Object.assign({}, product);
  }

  updateProduct() {
    this._productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

}
