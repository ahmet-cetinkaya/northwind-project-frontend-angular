import Category from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Category>> {
    return this.httpClient.get<SingleResponseModel<Category>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(category: Category): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, category);
  }

  edit(category: Category): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${category.CategoryID}`,
      category
    );
  }

  delete(category: Category): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${category.CategoryID}`
    );
  }
}
