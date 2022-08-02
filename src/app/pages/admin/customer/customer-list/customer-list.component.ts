import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

declare var window: any;


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList!:Customer[]

  constructor(private customerService: CustomerService,private router: Router) { }

  deleteModal:any;
  idTodelete: number = 0;

  ngOnInit(): void {
    this.getCustomerList()
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
  }

  getCustomerList(){
    this.customerService.getList().subscribe(data => {
      this.customerList = data;
    })
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.customerService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.customerList = this.customerList.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }


}
