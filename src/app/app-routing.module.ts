import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then( m => m.SessionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'meals',
    loadChildren: () => import('./meals/meals.module').then( m => m.MealsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'football',
    loadChildren: () => import('./football/football.module').then( m => m.FootballPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'gym',
    loadChildren: () => import('./gym/gym.module').then( m => m.GymPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'album-selector',
    loadChildren: () => import('./album-selector/album-selector.module').then( m => m.AlbumSelectorPageModule)
  },
  {
    path: 'meals-detsil',
    loadChildren: () => import('./meals-detsil/meals-detsil.module').then( m => m.MealsDetsilPageModule)
  },
  {
    path: 'meals-detail',
    loadChildren: () => import('./meals-detail/meals-detail.module').then( m => m.MealsDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
