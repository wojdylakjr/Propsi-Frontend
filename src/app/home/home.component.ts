import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: IUser = {};


  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    this.authService.intializeCurrentUser();
    this.authService.user.subscribe(user => { this.user = user })
  }
}
