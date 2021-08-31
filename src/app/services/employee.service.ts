import Employee from '../models/employee';
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
export class EmployeeService {
  apiControllerUrl = `${environment.apiUrl}/employees`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Employee>> {
    return this.httpClient.get<ListResponseModel<Employee>>(
      this.apiControllerUrl
    );
  }

  getById(id: number): Observable<SingleResponseModel<Employee>> {
    return this.httpClient.get<SingleResponseModel<Employee>>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(employee: Employee): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiControllerUrl, employee);
  }

  edit(employee: Employee): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}/${employee.EmployeeID}`,
      employee
    );
  }

  delete(employee: Employee): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(
      `${this.apiControllerUrl}/${employee.EmployeeID}`
    );
  }
}
