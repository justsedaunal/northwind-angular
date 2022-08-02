import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup
  product!: Product

  constructor(private formBuilder: FormBuilder,
    private router:Router, private toastr: ToastrService,
     private productService: ProductService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }
  createProductForm(): void {
    this.productForm = this.formBuilder.group({
      quantityPerUnit: [this.product?.quantityPerUnit || "" ,Validators.required],
      unitPrice: [this.product?.unitPrice ||"" ,  Validators.required],
      unitsInStock: [this.product?.unitsInStock ||"" , Validators.required],
      unitsOnOrder: [this.product?.unitsOnOrder ||"" , Validators.required],
      reorderLevel: [this.product?.reorderLevel || "" ,Validators.required],
      discontinued: [this.product?.discontinued ||"" , Validators.required],
      name: [this.product?.name ||"" , Validators.required],

    })

  }

  save() {
    if (this.product) this.update();
    else {
      this.add();


    }


  }
  update(){
    if (this.productForm.invalid) {
      this.toastr.warning("There are empty fileds ! ", "Update");
      return;

    }

    const product: Product = Object.assign({ id: this.product.id }, this.productForm.value);
    this.productService.update(product).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl("dashboard/products");
        this.toastr.success("Product updated successfully")
      },1000)
    })
  }

  add(){
    if(this.productForm.invalid){
      this.toastr.warning("There are empty fields !")
      return;

    }

    const product:Product = {
      ...this.productForm.value,
    }

    this.productService.add(product).subscribe(response => {
      setTimeout(() => {
        this.toastr.success("Product added successfully")
        this.router.navigateByUrl("dashboard/products")
      },1000)
    })
  }

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getProductById(params['id']);
      else{
        this.createProductForm();
      };
    });
  }

  getProductById(id:number) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.createProductForm();
    });
  }



}
