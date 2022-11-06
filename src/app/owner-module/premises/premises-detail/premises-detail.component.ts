import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOwner } from 'src/app/models/owner.model';
import { IPremises } from 'src/app/models/premises.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { PremisesService } from '../premises.service';

@Component({
  selector: 'app-premises-detail',
  templateUrl: './premises-detail.component.html',
  styleUrls: ['./premises-detail.component.scss']
})
export class PremisesDetailComponent implements OnInit {
  premisesId = 0;


  owner: IOwner = {};
  premises: IPremises = {};
  premisesCostsDisplayColumns: string[] = ["id", "costType", "action"];
  metersDisplayColumns: string[] = ["id", "meterType", "action"];

  constructor(private route: ActivatedRoute, private premisesService: PremisesService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.premisesId = params['id'];
      this.getOwnerPremisesById(this.premisesId);

    });
  }

  getOwnerPremisesById(premisesId: number) {
    this.premisesService.getOwnerPremisesById(this.owner.id!, premisesId)
      .subscribe({
        next: (response) => {
          this.premises = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }
  removePremisesCost(premisesId: number) {
    throw new Error('Method not implemented.');
  }
}
