import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../models/user.model';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: IUser = {};

  constructor(private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.authService.intializeCurrentUser();
    this.authService.user.subscribe(user => { this.user = user })
  }
  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%'
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '30%'
    });
  }


  logout() {
    console.log(" logout");
    this.authService.logout();
  }

  //TODO: usunac
  testOwner() {
    console.log("test owner");
    this.authService.testOwner()
      .subscribe({
        next: (response) => {

          alert("test owner succsefully");

        },
        error: () => {
          alert("Error while test owner");
        }
      })
  }

  testTenant() {
    console.log("test tenant");
    this.authService.testTenant()
      .subscribe({
        next: (response) => {

          alert("test teantn succsefully");

        },
        error: () => {
          alert("Error while test teannt");
        }
      })

  }
} 