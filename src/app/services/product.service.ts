import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import Product from '../models/product';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from './../models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  getByCategory(categoryID: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      `${this.apiControllerUrl}/?categoryID=${categoryID}`
    );
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, product);
  }

  edit(product: Product): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${product.ProductID}`,
      product
    );
  }

  delete(product: Product): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${product.ProductID}`
    );
  }
}
