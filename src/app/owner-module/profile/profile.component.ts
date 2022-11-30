import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOwner } from 'src/app/models/owner.model';
import { IUser } from 'src/app/models/user.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { AddPayUCredentialsDialogComponent } from './add-pay-ucredentials-dialog/add-pay-ucredentials-dialog.component';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  owner: IOwner = {};
  user: IUser = {};
  ownerUsers?: IUser[];
  billsDisplayColumns: string[] = ["id", "firstName", "lastName", "email", "action"];
  constructor(private userService: UserManagementService, private ownerService: OwnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.userService.user.subscribe(user => { this.user = this.user });
    this.getOwnerUsers();
  }
  openAddPayUDialog() {
    let dialogRef = this.dialog.open(AddPayUCredentialsDialogComponent, {
      width: '30%',
      data: {
        ownerId: this.owner.id,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userService.intializeCurrentUser();
      // this.userService.setOwner(user);
      // // this.userService.owner.subscribe(owner => { this.owner = owner });
    });
  }

  getOwnerUsers() {
    this.ownerService.getUsersForOwner(this.owner.id!)
      .subscribe({
        next: (response) => {
          this.ownerUsers = response;
          console.log("Owner users read succsefully");
        },
        error: () => {
          console.log("Error while geting owner users ")
        }
      })
  }

  removeUser(userId: number) {
    console.log("Not implemented");
  }

}
