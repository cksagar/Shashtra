import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    
    isLogedIn = false;
    constructor(private http: HttpClient,
        private router: Router) { }

    login(email: string, password: string) {
        return this.http.post<User>('https://reqres.in/api/login', { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                // JSON.stringify(user);
                // this.currentUserSubject.next(user);
                this.isLogedIn = true;
                return user;
            }));
    }

    getAll() {
        return this.http.get<any>('https://reqres.in/api/users?page=2');

    }

    getSingleUser(id: number): Observable<any | undefined> {
        return this.http.get<any>('https://reqres.in/api/users/' + id);
    }

    logOut() {
        this.router.navigate(['/login']);
        this.isLogedIn = false;
    }
}