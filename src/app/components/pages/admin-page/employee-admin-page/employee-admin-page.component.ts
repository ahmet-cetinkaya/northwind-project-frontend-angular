import { Component, OnInit } from '@angular/core';

import Employee from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-admin-page',
  templateUrl: './employee-admin-page.component.html',
  styleUrls: ['./employee-admin-page.component.scss'],
})
export class EmployeeAdminPageComponent implements OnInit {
  employees: Employee[] = [];
  filterText: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().subscribe((response) => {
      this.employees = response.Data;
    });
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['admin', 'employees', employee.EmployeeID]);
  }
}
