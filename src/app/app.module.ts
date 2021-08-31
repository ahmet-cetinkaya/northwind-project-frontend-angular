import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { AppReducers } from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CategoryAdminPageComponent } from './components/pages/admin-page/category-admin-page/category-admin-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomerAdminPageComponent } from './components/pages/admin-page/customer-admin-page/customer-admin-page.component';
import { EmployeeAdminPageComponent } from './components/pages/admin-page/employee-admin-page/employee-admin-page.component';
import { EmployeeTerritoryAdminPageComponent } from './components/pages/admin-page/employee-territory-admin-page/employee-territory-admin-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { NgModule } from '@angular/core';
import { OrderAdminPageComponent } from './components/pages/admin-page/order-admin-page/order-admin-page.component';
import { OrderDetailAdminPageComponent } from './components/pages/admin-page/order-detail-admin-page/order-detail-admin-page.component';
import { ProductFormPageComponent } from './components/pages/admin-page/products-admin-page/product-form-page/product-form-page.component';
import { ProductsAdminPageComponent } from './components/pages/admin-page/products-admin-page/products-admin-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { RegionAdminPageComponent } from './components/pages/admin-page/region-admin-page/region-admin-page.component';
import { ShipperAdminPageComponent } from './components/pages/admin-page/shipper-admin-page/shipper-admin-page.component';
import { StoreModule } from '@ngrx/store';
import { SupplierAdminPageComponent } from './components/pages/admin-page/supplier-admin-page/supplier-admin-page.component';
import { TerritoryAdminPageComponent } from './components/pages/admin-page/territory-admin-page/territory-admin-page.component';
import { ToastrModule } from 'ngx-toastr';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { CategoryFormPageComponent } from './components/pages/admin-page/category-admin-page/category-form-page/category-form-page.component';
import { CustomerFormPageComponent } from './components/pages/admin-page/customer-admin-page/customer-form-page/customer-form-page.component';
import { EmployeeFormPageComponent } from './components/pages/admin-page/employee-admin-page/employee-form-page/employee-form-page.component';
import { EmployeeTerritoryFormPageComponent } from './components/pages/admin-page/employee-territory-admin-page/employee-territory-form-page/employee-territory-form-page.component';
import { OrderFormPageComponent } from './components/pages/admin-page/order-admin-page/order-form-page/order-form-page.component';
import { OrderDetailFormPageComponent } from './components/pages/admin-page/order-detail-admin-page/order-detail-form-page/order-detail-form-page.component';
import { RegionFormPageComponent } from './components/pages/admin-page/region-admin-page/region-form-page/region-form-page.component';
import { ShipperFormPageComponent } from './components/pages/admin-page/shipper-admin-page/shipper-form-page/shipper-form-page.component';
import { SupplierFormPageComponent } from './components/pages/admin-page/supplier-admin-page/supplier-form-page/supplier-form-page.component';
import { TerritoryFormPageComponent } from './components/pages/admin-page/territory-admin-page/territory-form-page/territory-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipe,
    CartSummaryComponent,
    ProductFormPageComponent,
    LoginComponent,
    AdminPageComponent,
    ProductsAdminPageComponent,
    CategoryAdminPageComponent,
    CustomerAdminPageComponent,
    EmployeeAdminPageComponent,
    EmployeeTerritoryAdminPageComponent,
    OrderAdminPageComponent,
    OrderDetailAdminPageComponent,
    RegionAdminPageComponent,
    ShipperAdminPageComponent,
    SupplierAdminPageComponent,
    TerritoryAdminPageComponent,
    CategoryFormPageComponent,
    CustomerFormPageComponent,
    EmployeeFormPageComponent,
    EmployeeTerritoryFormPageComponent,
    OrderFormPageComponent,
    OrderDetailFormPageComponent,
    RegionFormPageComponent,
    ShipperFormPageComponent,
    SupplierFormPageComponent,
    TerritoryFormPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    StoreModule.forRoot(AppReducers),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
