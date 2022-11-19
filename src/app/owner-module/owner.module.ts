import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../auth.interceptor';
import { UserRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerSidenavComponent } from './owner-sidenav/owner-sidenav.component';
import { PropertyComponent } from './properties/properties-list/property.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { AddRentalComponent } from './rentals/add-rental/add-rental.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { PremisesListComponent } from './premises/premises-list/premises-list.component';
import { PremisesDetailComponent } from './premises/premises-detail/premises-detail.component';
import { RentalDetailComponent } from './rentals/rental-detail/rental-detail.component';
import { AddMeterMeasurementDialogComponent } from './premises/add-meter-measurement-dialog/add-meter-measurement-dialog.component';
import { AddPremisesCostDetailDialogComponent } from './premises/add-premises-cost-detail-dialog/add-premises-cost-detail-dialog.component';
import { BillsListComponent } from './bills/bills-list/bills-list.component';
import { BillsDetailComponent } from './bills/bills-detail/bills-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AddPayUCredentialsDialogComponent } from './profile/add-pay-ucredentials-dialog/add-pay-ucredentials-dialog.component';




@NgModule({
  declarations: [
    OwnerComponent,
    OwnerSidenavComponent,
    PropertyComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    RentalListComponent,
    AddRentalComponent,
    PremisesListComponent,
    PremisesDetailComponent,
    RentalDetailComponent,
    AddMeterMeasurementDialogComponent,
    AddPremisesCostDetailDialogComponent,
    BillsListComponent,
    BillsDetailComponent,
    ProfileComponent,
    AddPayUCredentialsDialogComponent,


  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSliderModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [OwnerComponent]
})
export class OwnerModule { }
