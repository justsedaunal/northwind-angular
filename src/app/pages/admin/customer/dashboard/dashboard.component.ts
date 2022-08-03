import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { SearchListService } from 'src/app/services/search-list/search-list.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public searchFilter:any=""
  query:any





  constructor(private searchListService:SearchListService) { }

  ngOnInit(): void {

  }

  onSearch() {
    this.searchListService.TextFilter=this.query

  }





}
