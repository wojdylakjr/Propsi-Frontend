import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor (private dialog: MatDialog,  private api: AuthService){
  }

  ngOnInit(): void {
  }
    openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width:'30%'
    });
  }

      openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width:'30%'
    });}

    //TODO: usunac
       testOwner() {
        console.log("test owner");
          this.api.testOwner()
      .subscribe({next:(response)=>{

        alert("test owner succsefully");
        
      },
      error:()=>{
        alert("Error while test owner");
      }
    })
    }
  
       testTenant() {
       console.log("test tenant");
          this.api.testTenant()
      .subscribe({next:(response)=>{

        alert("test teantn succsefully");
        
      },
      error:()=>{
        alert("Error while test teannt");
      }
    })
  
}

 logout() {
       console.log(" logout");
          this.api.logout()
      .subscribe({next:(response)=>{

        alert("logout succsefully");
        
      },
      error:()=>{
        alert("Error while logout");
      }
    })
             localStorage.removeItem("access_token");
        localStorage.removeItem("expires_at");
}}