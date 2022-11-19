import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayUCredentialsDialogComponent } from './add-pay-ucredentials-dialog.component';

describe('AddPayUCredentialsDialogComponent', () => {
  let component: AddPayUCredentialsDialogComponent;
  let fixture: ComponentFixture<AddPayUCredentialsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPayUCredentialsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPayUCredentialsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
