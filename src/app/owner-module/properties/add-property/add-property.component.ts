import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IOwner } from 'src/app/models/owner.model';
import { IAddress } from 'src/app/models/address.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { OwnerService } from '../../owner.service';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  owner: IOwner = {};
  isSinglePremises = false;
  premisesDisplayColumns: string[] = ["#", "name"];
  fixedCostsDisplayColumns: string[] = ["#", "costType", "costValue"];


  addPropertyForm!: FormGroup;
  constructor(private snackBarService: SnackBarService, private router: Router, private userService: UserManagementService, private propertyService: PropertyService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.addPropertyForm = this.formBuilder.group({
      name: [''],
      isSinglePremises: [this.isSinglePremises],
      address: this.formBuilder.group({
        city: [''],
        zipCode: [''],
        street: [''],
        streetNumber: [''],
        unitNumber: [''],
      }),
      fixedCosts: this.formBuilder.array([]),
      premises: this.formBuilder.array([])
    })
    //initial form with one premises ?
    // this.addPremisesToProperty();
  }
  ;

  // addresForm():FormGroup{
  //   return this.addPropertyForm.get('address');
  // }

  //premises form
  premises(): FormArray {
    return this.addPropertyForm.get('premises') as FormArray;
  }

  newPremises(): FormGroup {
    return this.formBuilder.group({
      name: '',
      meters: this.formBuilder.array([]),
      premisesCosts: this.formBuilder.array([])
    });
  }

  addPremisesToProperty() {
    this.premises().insert(0, this.newPremises());
    // this.premises().push(this.newPremises());
  }

  removePromisesFromProperty(index: number) {
    this.premises().removeAt(index);
  }

  //fixed costs form
  fixedCosts(): FormArray {
    return this.addPropertyForm.get('fixedCosts') as FormArray;
  }

  newFixedCost(): FormGroup {
    return this.formBuilder.group({
      costType: '',
      costValue: ''
    });
  }

  addCostToProperty() {
    this.fixedCosts().push(this.newFixedCost());
  }

  removeCostFromProperty(index: number) {
    this.fixedCosts().removeAt(index);
  }

  //meters in premises
  meters(premisesIndex: number): FormArray {
    return (<FormGroup>(<FormArray>this.addPropertyForm.controls['premises']).controls[premisesIndex]).controls['meters'] as FormArray;
  }

  newMeter(): FormGroup {
    return this.formBuilder.group({
      meterType: ''
    });
  }

  addMeterToPremises(premisesIndex: number) {
    this.meters(premisesIndex).push(this.newMeter());
  }

  removeMeterFromPremises(premisesIndex: number, index: number) {
    this.meters(premisesIndex).removeAt(index);
  }

  //costs in premises
  costs(premisesIndex: number): FormArray {
    return (<FormGroup>(<FormArray>this.addPropertyForm.controls['premises']).controls[premisesIndex]).controls['premisesCosts'] as FormArray;
  }

  newCost(): FormGroup {
    return this.formBuilder.group({
      costType: ''
    });
  }

  addCostToPremises(premisesIndex: number) {
    this.costs(premisesIndex).push(this.newCost());
  }

  removeCostFromPremises(premisesIndex: number, index: number) {
    this.costs(premisesIndex).removeAt(index);
  }


  SaveProperty() {
    console.log(this.addPropertyForm.value);
    // this.propertyService.saveProperty(this.addPropertyForm, this.owner.id!);
    if (this.addPropertyForm.valid) {
      this.propertyService.saveProperty(this.addPropertyForm.value, this.owner.id!)
        .subscribe({
          next: (response) => {
            this.router.navigate(['/', 'owner', 'properties']);
            this.snackBarService.openSnackBar("Property saved succsefully");
            console.log("Property saved succsefully");
          },
          error: () => {
            alert("Error while saving new user")
          }
        })
    }
  }
}
