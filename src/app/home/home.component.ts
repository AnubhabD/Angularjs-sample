import { Component, Input, OnInit } from '@angular/core';
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

  openDialog(Titles: string, Desc: string, Footers: string) {
    const dialogRef = this.dialog.open(DialogComponent, this.config);
    // dialogRef.
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('props data => ', Titles, Desc, Footers);
  }

  ngOnInit(): void {}
}