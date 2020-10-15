import { SharedModule } from './shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        MainNavComponent,
        SettingsComponent,
        PeopleDetailComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule // required animations module
    ],
    providers: [UserService], //
    bootstrap: [AppComponent]
})
export class AppModule { }
