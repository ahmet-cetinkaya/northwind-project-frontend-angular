import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './guards/admin.guard';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { CategoryAdminPageComponent } from './components/pages/admin-page/category-admin-page/category-admin-page.component';
import { CategoryFormPageComponent } from './components/pages/admin-page/category-admin-page/category-form-page/category-form-page.component';
import { CustomerAdminPageComponent } from './components/pages/admin-page/customer-admin-page/customer-admin-page.component';
import { CustomerFormPageComponent } from './components/pages/admin-page/customer-admin-page/customer-form-page/customer-form-page.component';
import { EmployeeAdminPageComponent } from './components/pages/admin-page/employee-admin-page/employee-admin-page.component';
import { EmployeeFormPageComponent } from './components/pages/admin-page/employee-admin-page/employee-form-page/employee-form-page.component';
import { EmployeeTerritoryAdminPageComponent } from './components/pages/admin-page/employee-territory-admin-page/employee-territory-admin-page.component';
import { EmployeeTerritoryFormPageComponent } from './components/pages/admin-page/employee-territory-admin-page/employee-territory-form-page/employee-territory-form-page.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { OrderAdminPageComponent } from './components/pages/admin-page/order-admin-page/order-admin-page.component';
import { OrderDetailAdminPageComponent } from './components/pages/admin-page/order-detail-admin-page/order-detail-admin-page.component';
import { OrderDetailFormPageComponent } from './components/pages/admin-page/order-detail-admin-page/order-detail-form-page/order-detail-form-page.component';
import { OrderFormPageComponent } from './components/pages/admin-page/order-admin-page/order-form-page/order-form-page.component';
import { ProductFormPageComponent } from './components/pages/admin-page/products-admin-page/product-form-page/product-form-page.component';
import { ProductsAdminPageComponent } from './components/pages/admin-page/products-admin-page/products-admin-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { RegionAdminPageComponent } from './components/pages/admin-page/region-admin-page/region-admin-page.component';
import { RegionFormPageComponent } from './components/pages/admin-page/region-admin-page/region-form-page/region-form-page.component';
import { ShipperAdminPageComponent } from './components/pages/admin-page/shipper-admin-page/shipper-admin-page.component';
import { ShipperFormPageComponent } from './components/pages/admin-page/shipper-admin-page/shipper-form-page/shipper-form-page.component';
import { SupplierAdminPageComponent } from './components/pages/admin-page/supplier-admin-page/supplier-admin-page.component';
import { SupplierFormPageComponent } from './components/pages/admin-page/supplier-admin-page/supplier-form-page/supplier-form-page.component';
import { TerritoryAdminPageComponent } from './components/pages/admin-page/territory-admin-page/territory-admin-page.component';
import { TerritoryFormPageComponent } from './components/pages/admin-page/territory-admin-page/territory-form-page/territory-form-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/category/:categoryID', component: ProductsPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    //canActivate: [LoginGuard, AdminGuard],
    children: [
      {
        path: 'categories',
        component: CategoryAdminPageComponent,
      },
      ...['categories/add', 'categories/:categoryID'].map((path) => ({
        path,
        component: CategoryFormPageComponent,
      })),

      {
        path: 'customers',
        component: CustomerAdminPageComponent,
      },
      ...['customers/add', 'customers/:customerID'].map((path) => ({
        path,
        component: CustomerFormPageComponent,
      })),

      {
        path: 'employees',
        component: EmployeeAdminPageComponent,
      },
      ...['employees/add', 'employees/:employeeID'].map((path) => ({
        path,
        component: EmployeeFormPageComponent,
      })),

      {
        path: 'employeesterritories',
        component: EmployeeTerritoryAdminPageComponent,
      },
      ...['employeesterritories/add', 'employeesterritories/:employeeID'].map(
        (path) => ({
          path,
          component: EmployeeTerritoryFormPageComponent,
        })
      ),

      {
        path: 'orders',
        component: OrderAdminPageComponent,
      },
      ...['orders/add', 'orders/:orderID'].map((path) => ({
        path,
        component: OrderFormPageComponent,
      })),

      {
        path: 'orderdetails',
        component: OrderDetailAdminPageComponent,
      },
      ...['orderdetails/add', 'orderdetails/:orderID'].map((path) => ({
        path,
        component: OrderDetailFormPageComponent,
      })),

      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      ...['products/add', 'products/:productID'].map((path) => ({
        path,
        component: ProductFormPageComponent,
      })),

      {
        path: 'regions',
        component: RegionAdminPageComponent,
      },
      ...['regions/add', 'regions/:regionID'].map((path) => ({
        path,
        component: RegionFormPageComponent,
      })),

      {
        path: 'shippers',
        component: ShipperAdminPageComponent,
      },
      ...['shippers/add', 'shippers/:shipperID'].map((path) => ({
        path,
        component: ShipperFormPageComponent,
      })),

      {
        path: 'suppliers',
        component: SupplierAdminPageComponent,
      },
      ...['suppliers/add', 'suppliers/:supplierID'].map((path) => ({
        path,
        component: SupplierFormPageComponent,
      })),

      {
        path: 'territories',
        component: TerritoryAdminPageComponent,
      },
      ...['territories/add', 'territories/:territoryID'].map((path) => ({
        path,
        component: TerritoryFormPageComponent,
      })),
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
