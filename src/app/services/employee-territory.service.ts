import EmployeeTerritory from '../models/employeeTerritory';
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
export class EmployeeTerritoryService {
  apiControllerUrl = `${environment.apiUrl}/employeesterritories`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<EmployeeTerritory>> {
    return this.httpClient.get<ListResponseModel<EmployeeTerritory>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<EmployeeTerritory>> {
    return this.httpClient.get<SingleResponseModel<EmployeeTerritory>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(employeeTerritory: EmployeeTerritory): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiControllerUrl,
      employeeTerritory
    );
  }

  edit(employeeTerritory: EmployeeTerritory): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${employeeTerritory.EmployeeID}`,
      employeeTerritory
    );
  }

  delete(employeeTerritory: EmployeeTerritory): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${employeeTerritory.EmployeeID}`
    );
  }
}
