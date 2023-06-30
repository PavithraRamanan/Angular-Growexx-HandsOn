import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoggedIn: boolean;
  errMsg: string;
  errFlag: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  loginUser() {
    if (this.username === 'test123@gmail.com' && this.password === 'P@ssw0rd') {
      this.isLoggedIn = true;
      this.errFlag = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.errFlag = true;
      this.isLoggedIn = false;
      this.errMsg = 'Incorrect Username or Password';
    }
  }
}
