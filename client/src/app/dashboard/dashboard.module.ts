import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
      declarations: [
            LoginComponent
      ],
      imports: [
            BrowserModule,
            ReactiveFormsModule,
            MatIconModule,
            MatMenuModule,
            MDBBootstrapModule.forRoot(),
            AppRoutingModule
      ]
})
export class LoginModule { }
