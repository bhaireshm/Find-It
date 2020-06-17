import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { AdminComponent } from './modules/admin/admin.component';
import { UsersComponent } from './modules/users/users.component';
import { OrphanagesComponent } from './modules/orphanages/orphanages.component';
import { OrphanagesListComponent } from './modules/orphanages/orphanages-list/orphanages-list.component';
import { DonateComponent } from './modules/donate/donate.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AdminComponent,
    UsersComponent,
    OrphanagesComponent,
    OrphanagesListComponent,
    DonateComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
