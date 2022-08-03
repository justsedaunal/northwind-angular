import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {

  onSearch : EventEmitter<any> = new EventEmitter();

  searchText : string =""

  constructor() { }

  get TextFilter() :string{
    return this.searchText;
  }

  set TextFilter(value:string){
  this.searchText = value;
  this.onSearch.emit(this.searchText);
  }
}
