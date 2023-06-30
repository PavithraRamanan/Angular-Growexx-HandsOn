import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { employees } from '../employees';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user = 'Pavithra';

  isDashboard: boolean;
  isEmployee: boolean;
  isLogout: boolean;
  employeeDetails = [];

  constructor(private router: Router) {
    this.employeeDetails = employees;
  }

  navigateToEmployee() {
    this.isDashboard = false;
    this.isEmployee = true;
    this.isLogout = false;
  }

  navigateToDashboard() {
    this.isDashboard = true;
    this.isEmployee = false;
    this.isLogout = false;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
