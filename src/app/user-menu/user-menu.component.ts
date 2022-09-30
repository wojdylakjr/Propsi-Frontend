import { Component, Input, OnInit } from '@angular/core';
import { Authority } from '../models/authorities.enum';
import { IOwner } from '../models/owner.model';
import { ITenant } from '../models/tenant.model';
import { IUser } from '../models/user.model';
import { UserManagementService } from '../services/user.management.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  @Input() user: IUser = {};
  authority = Authority;

  constructor(private userService: UserManagementService) { }

  ngOnInit(): void {
  }

  initializeOwner(owner: IOwner) {
    console.log(owner);
    this.userService.setEmptyTenantProfile();
    this.userService.setOwner(owner);
  }

  initializeTenant(tenant: ITenant) {
    console.log(tenant);
    this.userService.setEmptyOwnerProfile();
    this.userService.setTenant(tenant);
  }

}
