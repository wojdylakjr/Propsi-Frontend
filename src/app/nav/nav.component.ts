import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { IUser } from '../models/user.model';
import { UserManagementService } from '../services/user.management.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: IUser = {};

  constructor(private dialog: MatDialog, private authService: AuthService, private userService: UserManagementService) {
  }

  ngOnInit(): void {
    this.userService.user.subscribe(user => { this.user = user })
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