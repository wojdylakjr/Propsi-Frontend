import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOwner } from 'src/app/models/owner.model';
import { IRental } from 'src/app/models/rental.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  tenantId = 0;
  premisesId = 0;
  owner: IOwner = {};
  rental: IRental = {};
  premisesDisplayColumns: string[] = ["id", "name", "status", "action"];
  fixedCostsDisplayColumns: string[] = ["id", "costType", "costValue", "action"];
  constructor(private route: ActivatedRoute, private rentalService: RentalService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.tenantId = params['tenantId'];
      this.premisesId = params['premisesId'];
      this.getOwnerPropertyById();

    });
  }
  getOwnerPropertyById() {
    this.rentalService.getOwnerRentalById(this.owner.id!, this.tenantId, this.premisesId)
      .subscribe({
        next: (response) => {
          this.rental = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }
}
