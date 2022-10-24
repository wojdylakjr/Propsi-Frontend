import { Component, OnInit } from '@angular/core';
import { IOwner } from 'src/app/models/owner.model';
import { IProperty } from 'src/app/models/property.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  owner: IOwner = {};

  properties!: IProperty[];
  displayColumns: string[] = ["id", "name", "premises", "action"]

  constructor(private propertyService: PropertyService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.getOwnerProperties();
  }


  getOwnerProperties() {
    this.propertyService.getOwnerProperties(this.owner.id!)
      .subscribe({
        next: (response) => {
          this.properties = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

  RemoveProperty(arg0: any) {
    throw new Error('Method not implemented.');
  }
  openProperty(propertyId: number) {
    console.log(propertyId);
  }
  AddNewProperty(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
