import { PeopleDetailComponent } from './people-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
export const routes = [
    { path: '', component: PeopleDetailComponent, pathMatch: 'full' }
];

NgModule({
    declarations: [
        PeopleDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class PeopleDetailModule {
    public static routes = routes;
}