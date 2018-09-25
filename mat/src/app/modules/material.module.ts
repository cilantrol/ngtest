import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
// tslint:disable-next-line:max-line-length
import { MatNativeDateModule, MatIconModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  // imports: [
  //   MatCheckboxModule,
  //   MatRadioModule,
  //   MatSelectModule,
  //   MatInputModule,
  //   MatDatepickerModule,
  //   MatNativeDateModule,
  //   MatButtonToggleModule,
  //   MatButtonModule,
  //   MatIconModule,
  //   MatChipsModule,
  //   MatProgressSpinnerModule,
  //   MatTooltipModule,
  //   MatTabsModule,
  //   MatDialogModule
  // ],
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
