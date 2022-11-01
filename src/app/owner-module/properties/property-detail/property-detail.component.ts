import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOwner } from 'src/app/models/owner.model';
import { IProperty } from 'src/app/models/property.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  propertyId = 0;
  owner: IOwner = {};
  property: IProperty = {};
  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.propertyId = params['id'];
      this.getOwnerPropertyById(this.propertyId);
    });
  }

  getOwnerPropertyById(propertyId: number) {
    this.propertyService.getOwnerPropertyById(this.owner.id!, propertyId)
      .subscribe({
        next: (response) => {
          this.property = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

}
