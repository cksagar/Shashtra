import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
export const routes = [
    { path: '', component: SettingsComponent, pathMatch: 'full' }
];

NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class SettingsModule {
    public static routes = routes;
}