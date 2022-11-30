import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { UserManagementService } from '../services/user.management.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUser = {};

  tableDisplayColumns: string[] = ["id", "name", "action"];
  constructor(private userService: UserManagementService) {
  }


  ngOnInit(): void {
    this.userService.intializeCurrentUser();
    this.userService.user.subscribe(user => { this.user = user })
  }
  addNewTenant() {
    console.log('Not implemented');
  }
  removeTenant(teanatId: number) {
    console.log('Not implemented');
  }
}
