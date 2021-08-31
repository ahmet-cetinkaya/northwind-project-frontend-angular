import { Component, OnInit } from '@angular/core';

import EmployeeTerritory from 'src/app/models/employeeTerritory';
import { EmployeeTerritoryService } from 'src/app/services/employee-territory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-territory-admin-page',
  templateUrl: './employee-territory-admin-page.component.html',
  styleUrls: ['./employee-territory-admin-page.component.scss'],
})
export class EmployeeTerritoryAdminPageComponent implements OnInit {
  employeeTerritories: EmployeeTerritory[] = [];
  filterText: string = '';

  constructor(
    private employeeTerritoryService: EmployeeTerritoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeeTerritories();
  }

  getEmployeeTerritories() {
    this.employeeTerritoryService.getAll().subscribe((response) => {
      this.employeeTerritories = response.Data;
    });
  }

  editEmployeeTerritory(employeeTerritories: EmployeeTerritory) {
    this.router.navigate([
      'admin',
      'employeeterritories',
      employeeTerritories.EmployeeID,
    ]);
  }
}
