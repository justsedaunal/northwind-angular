import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiControllerUrl: string = `${environment.apiUrl}/products`;
  constructor(private httpclient: HttpClient) { }

  delete (id:number):Observable<Product>{
    return this.httpclient.delete<Product>(`${this.apiControllerUrl}/${id}`)

  }

  getProductList():Observable<Product[]> {
    return this.httpclient.get<Product[]>(`${this.apiControllerUrl}`)
  }

  update (product:Product){
    return this.httpclient.put<Product>(`${this.apiControllerUrl}/${product.id}`,product)

  }

  add(product:Product):Observable<Product>{
    return this.httpclient.post<Product>(`${this.apiControllerUrl}`,product)

  }

  getProductById(id:number):Observable<Product>{
    return this.httpclient.get<Product>(`${this.apiControllerUrl}/${id}`)
  }


}
