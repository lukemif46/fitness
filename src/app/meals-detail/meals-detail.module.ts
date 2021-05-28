import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealsDetailPageRoutingModule } from './meals-detail-routing.module';

import { MealsDetailPage } from './meals-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsDetailPageRoutingModule
  ],
  declarations: [MealsDetailPage]
})
export class MealsDetailPageModule {}
