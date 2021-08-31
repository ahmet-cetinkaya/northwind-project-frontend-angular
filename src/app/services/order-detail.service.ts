import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import OrderDetail from '../models/orderDetail';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  apiControllerUrl = `${environment.apiUrl}/orderdetails`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<OrderDetail>> {
    return this.httpClient.get<ListResponseModel<OrderDetail>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<OrderDetail>> {
    return this.httpClient.get<SingleResponseModel<OrderDetail>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(orderDetail: OrderDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiControllerUrl,
      orderDetail
    );
  }

  edit(orderDetail: OrderDetail): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${orderDetail.OrderID}`,
      orderDetail
    );
  }

  delete(orderDetail: OrderDetail): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${orderDetail.OrderID}`
    );
  }
}
