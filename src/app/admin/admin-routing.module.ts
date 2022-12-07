import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { TenantsListComponent } from './tenants/tenants-list/tenants-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';


const adminRoutes: Routes = [

  {
    path: '', component: AdminComponent,
    children: [
      { path: 'admin/users', component: UsersListComponent },
      { path: 'admin/users/:id', component: UserDetailComponent },
      { path: 'admin/owners', component: OwnersListComponent },
      { path: 'admin/tenants', component: TenantsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
