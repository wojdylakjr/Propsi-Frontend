import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { PremisesListComponent } from './premises/premises-list/premises-list.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { PropertyComponent } from './properties/properties-list/property.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { AddRentalComponent } from './rentals/add-rental/add-rental.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';



const userRoutes: Routes = [

  {
    path: '', component: OwnerComponent,
    children: [
      { path: 'owner/properties', component: PropertyComponent },
      { path: 'owner/properties/add', component: AddPropertyComponent },
      { path: 'owner/properties/:id', component: PropertyDetailComponent },
      { path: 'owner/rentals', component: RentalListComponent },
      { path: 'owner/rentals/add', component: AddRentalComponent },
      { path: 'owner/premises', component: PremisesListComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
