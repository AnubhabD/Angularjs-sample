import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  config: MatDialogConfig = {
    data: {
      props1: 'Install Angular',
      props2: 'Develop across all platforms',
      props6: 'Incredible tooling',
      props8: 'Loved by millions',
      props10: 'What is Angular?',
      props12: 'Architecture overview',
    },
  };
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, this.config);
    // dialogRef.
    dialogRef
      .afterClosed()
      .subscribe((result, props1 = 'check1', props2 = 'check2') => {
        console.log(`Dialog result: ${result}`);
      });
  }

  ngOnInit(): void {}
}