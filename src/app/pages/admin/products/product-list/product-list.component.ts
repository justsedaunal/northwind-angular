import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { SearchListService } from 'src/app/services/search-list/search-list.service';
declare var window: any;


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  productList!:Product[]
  deleteModal:any;
  idTodelete: number = 0;
  query:any;

  constructor(private productService: ProductService,private searchListService: SearchListService) { }

  ngOnInit(): void {
    this.getProductList();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.subscribeSearch();
  }


  subscribeSearch() {
    this.searchListService.onSearch.subscribe(searchText => {
      this.query = searchText;
    })
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
getProductList(){
  this.productService.getProductList().subscribe(data=>{
    this.productList = data
  })
}

  delete() {
    this.productService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.productList = this.productList.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
