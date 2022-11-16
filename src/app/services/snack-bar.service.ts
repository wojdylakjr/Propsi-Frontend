import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private matSnackBar: MatSnackBar) { }

  openSnackBar(message: string, durationInSeconds?: number, action?: string,
    hPosition?: any, vPosition?: any) {
    this.matSnackBar.openFromComponent(SnackBarComponent, {
      data: message,
      duration: durationInSeconds ? durationInSeconds * 1000 : 5000,
      horizontalPosition: hPosition ? hPosition : 'right',
      verticalPosition: vPosition ? vPosition : 'top',
      panelClass: ["snack-style"]
    });
  }
}
