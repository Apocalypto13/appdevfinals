import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SiginComponent } from './screens/sigin/sigin.component';
const routes: Routes = [ 
  { path: 'sigin', component: SiginComponent, title: 'Sign In' },
  { path: '', redirectTo: '/sigin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'signup', component: SignupComponent, title: 'Sign Up' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
