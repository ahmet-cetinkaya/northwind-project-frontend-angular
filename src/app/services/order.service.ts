import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import Order from '../models/order';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiControllerUrl = `${environment.apiUrl}/orders`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Order>> {
    return this.httpClient.get<ListResponseModel<Order>>(this.apiControllerUrl);
  }

  getById(id: number): Observable<SingleResponseModel<Order>> {
    return this.httpClient.get<SingleResponseModel<Order>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(order: Order): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, order);
  }

  edit(order: Order): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${order.OrderID}`,
      order
    );
  }

  delete(order: Order): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${order.OrderID}`
    );
  }
}
