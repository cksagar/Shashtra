import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';

export const routes = [
    { path: '', component: UserListComponent, pathMatch: 'full' }
];

NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class UserListModule {
    public static routes = routes;
}