import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  registerForm!: FormGroup;  customer! : Customer

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],   // ['']: default değer boş
      contactName: ['', [Validators.required]],
      contactTitle: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      region: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      customerKey: ['', [Validators.required]]
    })
    // new FormGroup({
    //   companyName: this.companyName
    // })
  }

  register() {
    if(this.registerForm.invalid){
      alert("gerekli alanları doldurunuz")

    } else {
      const customer:Customer = {
        ...this.registerForm.value,      // object, array
        city: this.registerForm.value.city.toUpperCase()
        //companyName: this.registerForm.get('companyName')!.value
      }

      this.customerService.add(customer).subscribe(response => {
        setTimeout(() => {
          location.reload();
          location.href=""
          alert("Customer succesfully added!")
        }, 1000);
        console.info(response)
      })
    }


  }

}



