import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanetsComponent } from './list-planets/list-planets.component';



@NgModule({
  declarations: [
  ListPlanetsComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    ListPlanetsComponent
  ]
})
export class PlanetsModule { }
