import { Component, OnInit } from '@angular/core';
import { IOwner } from 'src/app/models/owner.model';
import { ITenant } from 'src/app/models/tenant.model';
import { UserManagementService } from 'src/app/services/user.management.service';

// import {MatSideList} from '@angular/material'

@Component({
  selector: 'owner-sidenav',
  templateUrl: './owner-sidenav.component.html',
  styleUrls: ['./owner-sidenav.component.scss']
})
export class OwnerSidenavComponent implements OnInit {
  owner: IOwner = {};
  constructor(private userService: UserManagementService) { }

  ngOnInit(): void {

    this.userService.owner.subscribe(owner => { this.owner = owner });
    console.log('On init: ')
    console.log(this.owner);
  }

}
