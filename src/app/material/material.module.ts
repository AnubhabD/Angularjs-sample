import { NgModule } from '@angular/core';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    A11yModule,
    CdkTableModule,
    DragDropModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ],
})
export class MaterialModule {}