
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
// import { response } from 'express';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required]
      // description: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Call service to add product
      console.log('Product added:', this.productForm.value);
      
        this.productService.addProduct(this.productForm.value) 
          console.log('Product added successfully:');
          // Reset the form
          this.productForm.reset();  
        };
    }
  }


