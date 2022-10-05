import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IOwner } from 'src/app/models/owner.model';
import { ITenant } from 'src/app/models/tenant.model';
import { UserManagementService } from 'src/app/services/user.management.service';

// import {MatSideList} from '@angular/material'

@Component({
  selector: 'admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {
  owner: IOwner = {};
  tenant: ITenant = {};

  constructor(private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.userService.tenant.subscribe(tenant => { this.tenant = tenant });
  }

}
