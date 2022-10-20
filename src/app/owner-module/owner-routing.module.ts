import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { PropertyComponent } from './properties/properties-list/property.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';



const userRoutes: Routes = [

  {
    path: '', component: OwnerComponent,
    children: [
      { path: 'owner/properties', component: PropertyComponent },
      { path: 'owner/properties/add', component: AddPropertyComponent },
      { path: 'owner/properties/:id', component: PropertyDetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
