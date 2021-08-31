import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Territory from 'src/app/models/territory';
import { TerritoryService } from 'src/app/services/territory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-territory-form-page',
  templateUrl: './territory-form-page.component.html',
  styleUrls: ['./territory-form-page.component.scss'],
})
export class TerritoryFormPageComponent implements OnInit {
  territoryForm!: FormGroup;
  territory?: Territory;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private territoryService: TerritoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createTerritoryAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['territoryID']) {
        this.getTerritoryById(params['territoryID']);
      }
    });
  }

  getTerritoryById(id: number) {
    this.territoryService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.territory = response.Data;
      this.createTerritoryEditForm();
    });
  }

  createTerritoryEditForm() {
    this.territoryForm = this.formBuilder.group({
      TerritoryID: [this.territory?.TerritoryID, Validators.required],
      TerritoryDescription: [
        this.territory?.TerritoryDescription,
        Validators.required,
      ],
      RegionID: [this.territory?.RegionID, Validators.required],
    });
  }

  createTerritoryAddForm() {
    this.territoryForm = this.formBuilder.group({
      TerritoryID: [this.territory?.TerritoryID, Validators.required],
      TerritoryDescription: [
        this.territory?.TerritoryDescription,
        Validators.required,
      ],
      RegionID: [this.territory?.RegionID, Validators.required],
    });
  }

  add() {
    if (!this.territoryForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let territory: Territory = { ...this.territoryForm.value };
    this.territoryService.add(territory).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'territorys']);
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
    if (!this.territoryForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let territoryModule: Territory = {
      ...this.territory,
      ...this.territoryForm.value,
    };
    this.territoryService.edit(territoryModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'territories']);
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

    let territoryModule: Territory = {
      ...this.territory,
      ...this.territoryForm.value,
    };
    this.territoryService.delete(territoryModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'territories']);
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
