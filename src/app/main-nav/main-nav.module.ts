import { MainNavComponent } from './main-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', component: MainNavComponent, children: [
      { path: 'user-list',
      loadChildren: () => import('./../user-list/user-list.module').then(m => m.UserListModule)},

      { path: '', redirectTo: 'main-nav', pathMatch: 'full' },
      { path: 'settings',
        loadChildren: () => import('./../settings/settings.module').then(m => m.SettingsModule)},

      { path: 'people-detail',
      loadChildren: () => import('./../people-detail/people-detail.module').then(m => m.PeopleDetailModule)}
    ]}
  ];

  export const ROUTES = RouterModule.forChild(routes);

NgModule({
    declarations: [
        MainNavComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class MainNavModule {
    public static routes = routes;
}