import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle = 'People List';
  userList = false;
  users: User[];
  imageWidth = 100;
  imageMargin = 2;
  errorMessage = 'Loading data... please wait!';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList =  this.userService.isLogedIn;
    // this.userList =  this.userService.isLogedIn = true;

    this.userService.getAll().subscribe(
      userData => {
        this.users = userData.data;
      },
      error => {
        this.errorMessage = error.message;
        console.error('e: ' + this.errorMessage);
      }
    );
  }
}
