import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from './../../services/local-storage.service';
import LoginModel from 'src/app/models/loginModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.valid) return;

    let loginModel: LoginModel = { ...this.loginForm.value };
    this.authService.login(loginModel).subscribe(
      (response) => {
        if (response.Message) this.toastrService.success(response.Message);
        this.localStorageService.set('tokenModel', response.Data.accessToken);
        this.authService.setUserToken(response.Data);
        this.router.navigateByUrl('');
      },
      (errorResponse) => {
        this.toastrService.error(errorResponse.error);
      }
    );
  }
}
