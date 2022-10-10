import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOwner } from '../models/owner.model';
import { UserManagementService } from '../services/user.management.service';
import { OwnerService } from './owner.service';


@Component({
  selector: 'user',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }
}
