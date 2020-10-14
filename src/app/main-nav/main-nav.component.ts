import { UserService } from './../user.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnChanges {


  isLogged: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private userService: UserService) { }

  ngOnInit() {
    this.isLogged = this.userService.isLogin;
  }

  ngOnChanges() {
    this.isLogged = this.userService.isLogin;
    console.log("ng onchanges: " + this.isLogged);

  }



}
