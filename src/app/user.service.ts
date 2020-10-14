import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    isLogin = false;
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<User>('https://reqres.in/api/login', { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                // JSON.stringify(user);
                // this.currentUserSubject.next(user);
                return user;
            }));
    }

    getAll() {
        return this.http.get<any>('https://reqres.in/api/users?page=2');
    }

    getSingleUser(id: number): Observable<any | undefined> {
        return this.http.get<any>('https://reqres.in/api/users/' + id);

        return this.getAll();
        // .pipe( 
        //     map((users: any) => users.find(p => {
        //         p.data.id === id;
        //         console.log("users in : "+ users);
        //         console.log("p: "+ p);
        //         console.log("p.data.id: "+ p.data.id);
        //     }))
        // );
    }


}