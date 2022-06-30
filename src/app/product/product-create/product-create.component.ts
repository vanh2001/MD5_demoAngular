import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  // Template
  // createProduct(form) {
  //   this.productService.create(form.value);
  //   form.resetForm();
  //   // this.productService.create(this.product);
  //   // Làm rỗng form
  //   // this.product = {};
  //   // Điều hướng trang sau khi ấn tạo mới
  //   // this.router.navigateByUrl('/');
  // }

//  Reactive
  createProductUsingReactiveForm() {
    // this.productService.create(this.productForm.value);
    this.productForm.reset();
  }

  get idControl() {
    return this.productForm.get('id');
  }
  get nameControl() {
    return this.productForm.get('name');
  }
}
