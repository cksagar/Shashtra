import { MainNavComponent } from './main-nav/main-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main-nav',
    component: MainNavComponent
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
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule {

}