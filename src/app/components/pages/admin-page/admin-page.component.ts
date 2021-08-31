import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  activeMenu!: string;
  constructor() {}

  ngOnInit(): void {}

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }
}
