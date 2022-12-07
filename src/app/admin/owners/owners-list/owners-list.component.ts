import { Component, OnInit } from '@angular/core';
import { IOwner } from 'src/app/models/owner.model';
import { IUser } from 'src/app/models/user.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {


  users!: IOwner[];
  displayColumns: string[] = ["id", "name", "action"]
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  getAllOwners() {
    this.adminService.getAllOwners()
      .subscribe({
        next: (response) => {
          this.users = response;
          console.log("Owners readed sucsefully");
        },
        error: () => {
          console.log("Error while geting owners")
        }
      })
  }

  removeUser(userId: number) {
    console.log("not implented");
  }

}


