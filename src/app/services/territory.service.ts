import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import Territory from '../models/territory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TerritoryService {
  apiControllerUrl = `${environment.apiUrl}/territories`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Territory>> {
    return this.httpClient.get<ListResponseModel<Territory>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Territory>> {
    return this.httpClient.get<SingleResponseModel<Territory>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(territory: Territory): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiControllerUrl,
      territory
    );
  }

  edit(territory: Territory): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${territory.TerritoryID}`,
      territory
    );
  }

  delete(territory: Territory): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${territory.TerritoryID}`
    );
  }
}
