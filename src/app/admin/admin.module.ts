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
import { AdminComponent } from './admin.component';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../auth.interceptor';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { TenantsListComponent } from './tenants/tenants-list/tenants-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatTableModule } from '@angular/material/table';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminSidenavComponent,
    UsersListComponent,
    OwnersListComponent,
    TenantsListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
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
  bootstrap: [AdminComponent]
})
export class AdminModule { }
