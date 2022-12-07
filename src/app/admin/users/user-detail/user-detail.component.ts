import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUser = {};
  tableDisplayColumns: string[] = ["id", "name", "action"];
  userId = 0;
  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.userId = params['id'];
      this.getUserById(this.userId);
    });
  }
  getUserById(userId: number) {
    this.adminService.getUserById(userId)
      .subscribe({
        next: (response) => {
          this.user = response;
          console.log("Users readed sucsefully");
        },
        error: () => {
          console.log("Error while geting properties")
        }
      })
  }
  addNewTenant() {
    throw new Error('Method not implemented.');
  }
  removeTenant(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
