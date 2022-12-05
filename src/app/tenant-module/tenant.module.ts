import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { MatSidenavModule } from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { TenantComponent } from './tenant.component';
import { AuthInterceptor } from '../auth.interceptor';
import { TenantSidenavComponent } from './tenant-sidenav/tenant-sidenav.component';
import { TenantRoutingModule } from './tenant-routing.module';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { RentalDetailComponent } from './rentals/rental-detail/rental-detail.component';
import { BillsListComponent } from './bills/bills-list/bills-list.component';
import { BillDetailComponent } from './bills/bill-detail/bill-detail.component';

@NgModule({
  declarations: [
    TenantComponent,
    TenantSidenavComponent,
    RentalListComponent,
    RentalDetailComponent,
    BillDetailComponent,
    BillsListComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    TenantRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [TenantComponent]
})
export class TenantModule { }
