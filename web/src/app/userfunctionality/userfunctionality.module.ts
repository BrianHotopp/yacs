import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserfunctionalityComponent } from './userfunctionality.component';
import { DoormanComponent } from './doorman.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    UserfunctionalityComponent,
    DoormanComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserfunctionalityModule { }
