import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

const routes: Routes = [

   {path:'login', component:LoginDialogComponent},
    {path:'register', component:RegisterDialogComponent},
    {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
