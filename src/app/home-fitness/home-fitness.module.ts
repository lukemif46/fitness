import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFitnessPageRoutingModule } from './home-fitness-routing.module';

import { HomeFitnessPage } from './home-fitness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFitnessPageRoutingModule
  ],
  declarations: [HomeFitnessPage]
})
export class HomeFitnessPageModule {}
