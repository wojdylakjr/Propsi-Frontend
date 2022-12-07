import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users!: IUser[];
  displayColumns: string[] = ["id", "firstName", "lastName", "email", "action"]
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers()
      .subscribe({
        next: (response) => {
          this.users = response;
          console.log("Users readed sucsefully");
        },
        error: () => {
          console.log("Error while geting properties")
        }
      })
  }

  removeUser(userId: number) {
    console.log("not implented");
  }

}
