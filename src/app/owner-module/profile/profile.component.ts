import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOwner } from 'src/app/models/owner.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { AddPayUCredentialsDialogComponent } from './add-pay-ucredentials-dialog/add-pay-ucredentials-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  owner: IOwner = {};
  constructor(private userService: UserManagementService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
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

}
