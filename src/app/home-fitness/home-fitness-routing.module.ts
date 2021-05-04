import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFitnessPage } from './home-fitness.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFitnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFitnessPageRoutingModule {}
