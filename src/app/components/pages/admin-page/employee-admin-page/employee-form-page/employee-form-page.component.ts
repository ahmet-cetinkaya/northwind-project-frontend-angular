import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Employee from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form-page',
  templateUrl: './employee-form-page.component.html',
  styleUrls: ['./employee-form-page.component.scss'],
})
export class EmployeeFormPageComponent implements OnInit {
  employeeForm!: FormGroup;
  employee?: Employee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createEmployeeAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['employeeID']) {
        this.getEmployeeById(params['employeeID']);
      }
    });
  }

  getEmployeeById(id: number) {
    this.employeeService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.employee = response.Data;
      this.createEmployeeEditForm();
    });
  }

  createEmployeeEditForm() {
    this.employeeForm = this.formBuilder.group({
      FirstName: [this.employee?.FirstName, Validators.required],
      LastName: [this.employee?.LastName, Validators.required],
      Title: [this.employee?.Title, Validators.required],
      TitleOfCourtesy: [this.employee?.TitleOfCourtesy, Validators.required],
      BirthDate: [this.employee?.BirthDate, Validators.required],
      HireDate: [this.employee?.HireDate, Validators.required],
      Address: [this.employee?.Address, Validators.required],
      City: [this.employee?.City, Validators.required],
      Region: [this.employee?.Region, Validators.required],
      PostalCode: [this.employee?.PostalCode, Validators.required],
      Country: [this.employee?.Country, Validators.required],
      HomePhone: [this.employee?.HomePhone, Validators.required],
      Extension: [this.employee?.Extension, Validators.required],
      Notes: [this.employee?.Notes, Validators.required],
      ReportsTo: [this.employee?.ReportsTo, Validators.required],
      Salary: [this.employee?.Salary, Validators.required],
    });
  }

  createEmployeeAddForm() {
    this.employeeForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Title: ['', Validators.required],
      TitleOfCourtesy: ['', Validators.required],
      BirthDate: ['', Validators.required],
      HireDate: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      Region: ['', Validators.required],
      PostalCode: ['', Validators.required],
      Country: ['', Validators.required],
      HomePhone: ['', Validators.required],
      Extension: ['', Validators.required],
      Notes: ['', Validators.required],
      ReportsTo: ['', Validators.required],
      Salary: ['', Validators.required],
    });
  }

  add() {
    if (!this.employeeForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let employee: Employee = { ...this.employeeForm.value };
    this.employeeService.add(employee).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'employees']);
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
    if (!this.employeeForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let employeeModule: Employee = {
      ...this.employee,
      ...this.employeeForm.value,
    };
    this.employeeService.edit(employeeModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'employees']);
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

    let employeeModule: Employee = {
      ...this.employee,
      ...this.employeeForm.value,
    };
    this.employeeService.delete(employeeModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'employees']);
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
