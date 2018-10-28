import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VolunteeringPage } from './volunteering.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteeringPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VolunteeringPage]
})
export class VolunteeringPageModule {}
