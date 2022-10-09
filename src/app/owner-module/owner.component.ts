import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOwner } from '../models/owner.model';
import { UserManagementService } from '../services/user.management.service';
import { OwnerService } from './owner.service';


@Component({
  selector: 'user',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  owner: IOwner = {};
  id: number = 0;
  private sub: any;

  constructor(private ownerService: OwnerService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    // this.ownerService.owner.subscribe(owner => { this.owner = owner });
    // console.log('On init main: ')
    // console.log(this.owner);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.initializeCurrentUser();
  }

  initializeCurrentUser() {
    this.ownerService.getOwner(this.id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.owner = response;
        },
        error: () => {
          alert("Error while geting owner");
        }
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
