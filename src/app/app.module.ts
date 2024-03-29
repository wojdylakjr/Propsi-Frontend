import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';


import { RegisterDialogComponent } from './common/register-dialog/register-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginDialogComponent } from './common/login-dialog/login-dialog.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './common/home/home.component';
import { MatCardModule } from '@angular/material/card';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserMenuComponent } from './common/user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { TenantModule } from './tenant-module/tenant.module';
import { OwnerModule } from './owner-module/owner.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './common/snack-bar/snack-bar.component';
import { UserDetailComponent } from './common/user-detail/user-detail.component';
import { AdminModule } from './admin/admin.module';




@NgModule({
  declarations: [
    AppComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    NavComponent,
    HomeComponent,
    SidenavComponent,
    UserMenuComponent,
    SnackBarComponent,
    UserDetailComponent
  ],
  imports: [
    // UserModule,
    AdminModule,
    OwnerModule,
    TenantModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
