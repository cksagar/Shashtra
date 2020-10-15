import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  user: User;
  errorMessage = '';
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogedIn = true;

    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getItem(id);
    }
  }
  getItem(id: number) {
    this.userService.getSingleUser(id).subscribe({
      next: user => {
        this.user = user
      },
      error: err => this.errorMessage = err
    });
  }

}
