import Customer from '../models/customer';
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
export class CustomerService {
  apiControllerUrl = `${environment.apiUrl}/customers`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Customer>> {
    return this.httpClient.get<SingleResponseModel<Customer>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, customer);
  }

  edit(customer: Customer, previousId: string = ''): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${
        previousId ? previousId : customer.CustomerID
      }`,
      customer
    );
  }

  delete(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${customer.CustomerID}`
    );
  }
}
