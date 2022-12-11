import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models/user.model';
import { UserManagementService } from '../../services/user.management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: IUser = {};


  constructor(private userService: UserManagementService) {
  }


  ngOnInit(): void {
    this.userService.intializeCurrentUser();
    this.userService.user.subscribe(user => { this.user = user })
  }
}
