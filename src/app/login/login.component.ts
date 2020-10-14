import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    user: User;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // for accessing to form fields
    get fval() { return this.loginForm.controls; }

    onFormSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.login(this.fval.email.value, this.fval.password.value)
            .subscribe(
                data => {
                    this.user = data;
                    // let dd = JSON.stringify(data);
                    // console.log("login : " + dd);
                    this.router.navigate(['/user-list']);
                    this.userService.isLogin = true;
                    this.loading = false;
                },
                error => {
                    // this.toastr.error(error.error.message, 'Error');
                    console.log(error.error.message);
                    this.loading = false;
                });
    }

    logout() {
        this.router.navigate(['/login']);
        this.userService.isLogin = false;
    }
}