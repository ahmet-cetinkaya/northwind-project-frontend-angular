import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ListResponseModel from '../models/listResponseModel';
import { Observable } from 'rxjs';
import Region from '../models/region';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  apiControllerUrl = `${environment.apiUrl}/regions`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Region>> {
    return this.httpClient.get<ListResponseModel<Region>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Region>> {
    return this.httpClient.get<SingleResponseModel<Region>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(region: Region): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, region);
  }

  edit(region: Region): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${region.RegionID}`,
      region
    );
  }

  delete(region: Region): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${region.RegionID}`
    );
  }
}
