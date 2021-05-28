import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsDetailPage } from './meals-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MealsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsDetailPageRoutingModule {}
