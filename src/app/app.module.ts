import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserListComponent,
        MainNavComponent,
        PeopleDetailComponent,
        SettingsComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule // required animations module
    ],
    providers: [UserService], //
    bootstrap: [AppComponent]
})
export class AppModule { }
