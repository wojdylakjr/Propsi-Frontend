import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner-module/owner.component';
import { TenantComponent } from './tenant-module/tenant.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'tenant', component: TenantComponent },
  { path: 'owner/:id', component: OwnerComponent },
  { path: 'admin', component: AdminComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
