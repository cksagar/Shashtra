import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
export const routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' }
];

NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class LoginModule {
    public static routes = routes;
}