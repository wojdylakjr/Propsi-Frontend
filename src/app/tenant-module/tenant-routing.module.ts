import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDetailComponent } from './bills/bill-detail/bill-detail.component';
import { BillsListComponent } from './bills/bills-list/bills-list.component';
import { RentalDetailComponent } from './rentals/rental-detail/rental-detail.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { TenantComponent } from './tenant.component';


const userRoutes: Routes = [

  {
    path: '', component: TenantComponent,
    children: [
      { path: 'tenant/rentals', component: RentalListComponent },
      { path: 'tenant/rentals/:id', component: RentalDetailComponent },
      { path: 'tenant/bills', component: BillsListComponent },
      { path: 'tenant/bills/:id', component: BillDetailComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
