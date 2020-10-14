import { SettingsComponent } from './settings/settings.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'app-main-nav',
    component: MainNavComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-list/:id',
    component: PeopleDetailComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule {

}