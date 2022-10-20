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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { MatSidenavModule } from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../auth.interceptor';
import { UserRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerSidenavComponent } from './owner-sidenav/owner-sidenav.component';
import { PropertyComponent } from './properties/properties-list/property.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';

@NgModule({
  declarations: [
    OwnerComponent,
    OwnerSidenavComponent,
    PropertyComponent,
    AddPropertyComponent,
    PropertyDetailComponent
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
