import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './components/pages/admin/admin.component';
import { AppComponent } from './app.component';
import { AppReducers } from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CategoryComponent } from './components/category/category.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { NgModule } from '@angular/core';
import { ProductAddComponent } from './components/pages/admin/product/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { VatAddedPipe } from './pipes/vat-added.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterProductPipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
    AdminComponent,
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
