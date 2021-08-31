import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Territory from 'src/app/models/territory';
import { TerritoryService } from 'src/app/services/territory.service';

@Component({
  selector: 'app-territory-admin-page',
  templateUrl: './territory-admin-page.component.html',
  styleUrls: ['./territory-admin-page.component.scss'],
})
export class TerritoryAdminPageComponent implements OnInit {
  territories: Territory[] = [];
  filterText: string = '';

  constructor(
    private territoryService: TerritoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTerritories();
  }

  getTerritories() {
    this.territoryService.getAll().subscribe((response) => {
      this.territories = response.Data;
    });
  }

  editTerritory(territory: Territory) {
    this.router.navigate(['admin', 'territories', territory.TerritoryID]);
  }
}
