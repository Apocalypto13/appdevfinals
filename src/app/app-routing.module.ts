import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { SignupComponent } from './screens/signup/signup.component';
const routes: Routes = [ 
  { path: 'login', component: LoginComponent, title: 'CarManagement | Login' },
  { path: 'home', component: HomeComponent, title: 'CarManagement | Home' },
  { path: 'signup', component: SignupComponent, title: 'CarManagement | Signup' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
