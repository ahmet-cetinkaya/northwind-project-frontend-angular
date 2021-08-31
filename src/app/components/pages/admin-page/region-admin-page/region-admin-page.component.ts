import { Component, OnInit } from '@angular/core';

import Region from 'src/app/models/region';
import { RegionService } from 'src/app/services/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region-admin-page',
  templateUrl: './region-admin-page.component.html',
  styleUrls: ['./region-admin-page.component.scss'],
})
export class RegionAdminPageComponent implements OnInit {
  regions: Region[] = [];
  filterText: string = '';

  constructor(private regionService: RegionService, private router: Router) {}

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getAll().subscribe((response) => {
      this.regions = response.Data;
    });
  }

  editRegion(region: Region) {
    this.router.navigate(['admin', 'regions', region.RegionID]);
  }
}
