import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './pages/admin/customer/add-customer/add-customer.component';
import { CustomerListComponent } from './pages/admin/customer/customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './pages/admin/customer/update-customer/update-customer.component';
import { ProductListComponent } from './pages/admin/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/products/product-form/product-form.component';

const routes: Routes = [
  { path: '', component:CustomerListComponent, pathMatch: 'full' },
  { path: "dashboard/customers" , component: CustomerListComponent},
  { path : "dashboard/add-customer",component:AddCustomerComponent},
  { path : "dashboard/update-customer/:id",component:UpdateCustomerComponent},
  { path : "dashboard/products",component:ProductListComponent},
  { path : "dashboard/add-product",component:ProductFormComponent},
  {path: 'dashboard/update-product/:id',component:ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
