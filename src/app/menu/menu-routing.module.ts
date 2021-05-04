import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      // duplicate here
      {
        path: 'sessions',
        loadChildren: () => import('../sessions/sessions.module').then(m => m.SessionsPageModule)
      },
      {
        path: 'meals',
        loadChildren: () => import('../meals/meals.module').then(m => m.MealsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      // end duplicate
      {
        path: '',
        redirectTo: '/menu/sessions',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/sessions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}