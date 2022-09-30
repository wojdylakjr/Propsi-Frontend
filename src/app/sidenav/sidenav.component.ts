import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IOwner } from '../models/owner.model';
import { ITenant } from '../models/tenant.model';
import { UserManagementService } from '../services/user.management.service';
// import {MatSideList} from '@angular/material'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  owner: IOwner = {};
  tenant: ITenant = {};

  constructor(private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.userService.tenant.subscribe(tenant => { this.tenant = tenant });
  }

}
