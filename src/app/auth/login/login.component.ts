import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService, User } from '../auth.service';
import { ResponseService } from '../../utils/services/response.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private responseService: ResponseService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  login(user: User) {
    this.authService.login(user)
      .subscribe((data) =>{
        localStorage.setItem('access_token', data.access_token)
        this.responseService.handleSuccess('Login successful');
        if(this.authService.getUser().isAdmin) {
          this.router.navigate(['/architect/blueprint']);
        }
        else{
          this.router.navigate(['/manager']);
        }
      }
    );
  }
}
