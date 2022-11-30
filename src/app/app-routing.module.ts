import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner-module/owner.component';
import { TenantComponent } from './tenant-module/tenant.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'tenant', component: TenantComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
