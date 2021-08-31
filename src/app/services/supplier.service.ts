import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import Supplier from '../models/supplier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  apiControllerUrl = `${environment.apiUrl}/suppliers`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Supplier>> {
    return this.httpClient.get<ListResponseModel<Supplier>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Supplier>> {
    return this.httpClient.get<SingleResponseModel<Supplier>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(supplier: Supplier): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, supplier);
  }

  edit(supplier: Supplier): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${supplier.SupplierID}`,
      supplier
    );
  }

  delete(supplier: Supplier): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${supplier.SupplierID}`
    );
  }
}
