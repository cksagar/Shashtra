import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

    isLogged: boolean;
    constructor( private userService: UserService) {
    }

    ngOnInit() {
        this.isLogged = this.userService.isLogin;
    }


}