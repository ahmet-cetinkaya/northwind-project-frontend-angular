import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import EmployeeTerritory from 'src/app/models/employeeTerritory';
import { EmployeeTerritoryService } from 'src/app/services/employee-territory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-territory-form-page',
  templateUrl: './employee-territory-form-page.component.html',
  styleUrls: ['./employee-territory-form-page.component.scss'],
})
export class EmployeeTerritoryFormPageComponent implements OnInit {
  employeeTerritoryForm!: FormGroup;
  employeeTerritory?: EmployeeTerritory;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private employeeTerritoryService: EmployeeTerritoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createEmployeeTerritoryAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['employeeTerritoryID']) {
        this.getEmployeeTerritoryById(params['employeeTerritoryID']);
      }
    });
  }

  getEmployeeTerritoryById(id: number) {
    this.employeeTerritoryService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.employeeTerritory = response.Data;
      this.createEmployeeTerritoryEditForm();
    });
  }

  createEmployeeTerritoryEditForm() {
    this.employeeTerritoryForm = this.formBuilder.group({
      EmployeeID: [this.employeeTerritory?.EmployeeID, Validators.required],
      TerritoryID: [this.employeeTerritory?.TerritoryID, Validators.required],
    });
  }

  createEmployeeTerritoryAddForm() {
    this.employeeTerritoryForm = this.formBuilder.group({
      EmployeeID: ['', Validators.required],
      TerritoryID: ['', Validators.required],
    });
  }

  add() {
    if (!this.employeeTerritoryForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let employeeTerritory: EmployeeTerritory = {
      ...this.employeeTerritoryForm.value,
    };
    this.employeeTerritoryService.add(employeeTerritory).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'employeesterritories']);
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          responseError.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage);
          });
        }
      }
    );
  }

  edit() {
    if (!this.employeeTerritoryForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let employeeTerritoryModule: EmployeeTerritory = {
      ...this.employeeTerritory,
      ...this.employeeTerritoryForm.value,
    };
    this.employeeTerritoryService.edit(employeeTerritoryModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'employeesterritories']);
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          responseError.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage);
          });
        }
      }
    );
  }

  delete_() {
    if (!confirm('Are you sure to delete it?')) return;

    let employeeTerritoryModule: EmployeeTerritory = {
      ...this.employeeTerritory,
      ...this.employeeTerritoryForm.value,
    };
    this.employeeTerritoryService.delete(employeeTerritoryModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'employeesterritories']);
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          responseError.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage);
          });
        }
      }
    );
  }
}
