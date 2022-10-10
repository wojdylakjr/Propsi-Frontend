import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { PropertyComponent } from './property/property.component';



const userRoutes: Routes = [

  { path: '', component: OwnerComponent },
  { path: 'properties', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
