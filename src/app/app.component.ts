import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    isLogged: boolean;
    constructor(private userService: UserService,
        private router: Router) {
    }
    ngOnDestroy() {
        this.userService.isLogedIn = true;
    }

    ngOnInit() {
        this.router.navigate(['/login']);
        this.isLogged = this.userService.isLogedIn;
    }
}