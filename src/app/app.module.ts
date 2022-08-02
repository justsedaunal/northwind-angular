import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/admin/customer/sidebar/sidebar.component';
import { DashboardComponent } from './pages/admin/customer/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './pages/admin/customer/add-customer/add-customer.component';
import { CustomerListComponent } from './pages/admin/customer/customer-list/customer-list.component';
import { UpdateCustomerComponent } from './pages/admin/customer/update-customer/update-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './pages/admin/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/products/product-form/product-form.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AddCustomerComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
