import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Region from 'src/app/models/region';
import { RegionService } from 'src/app/services/region.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-region-form-page',
  templateUrl: './region-form-page.component.html',
  styleUrls: ['./region-form-page.component.scss'],
})
export class RegionFormPageComponent implements OnInit {
  regionForm!: FormGroup;
  region?: Region;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private regionService: RegionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createRegionAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['regionID']) {
        this.getRegionById(params['regionID']);
      }
    });
  }

  getRegionById(id: number) {
    this.regionService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.region = response.Data;
      this.createRegionEditForm();
    });
  }

  createRegionEditForm() {
    this.regionForm = this.formBuilder.group({
      RegionDescription: [this.region?.RegionDescription, Validators.required],
    });
  }

  createRegionAddForm() {
    this.regionForm = this.formBuilder.group({
      RegionDescription: ['', Validators.required],
    });
  }

  add() {
    if (!this.regionForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let region: Region = { ...this.regionForm.value };
    this.regionService.add(region).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'regions']);
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
    if (!this.regionForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let regionModule: Region = { ...this.region, ...this.regionForm.value };
    this.regionService.edit(regionModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'regions']);
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

    let regionModule: Region = { ...this.region, ...this.regionForm.value };
    this.regionService.delete(regionModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'regions']);
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
