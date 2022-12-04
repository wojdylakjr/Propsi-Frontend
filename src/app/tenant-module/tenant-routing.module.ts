import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { TenantComponent } from './tenant.component';


const userRoutes: Routes = [

  {
    path: '', component: TenantComponent,
    children: [
      { path: 'tenant/rentals', component: RentalListComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
