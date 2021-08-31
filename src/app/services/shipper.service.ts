import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import ResponseModel from '../models/responseModel';
import Shipper from '../models/shipper';
import SingleResponseModel from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {
  apiControllerUrl = `${environment.apiUrl}/shippers`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Shipper>> {
    return this.httpClient.get<ListResponseModel<Shipper>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Shipper>> {
    return this.httpClient.get<SingleResponseModel<Shipper>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(shipper: Shipper): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, shipper);
  }

  edit(shipper: Shipper): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${shipper.ShipperID}`,
      shipper
    );
  }

  delete(shipper: Shipper): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${shipper.ShipperID}`
    );
  }
}
