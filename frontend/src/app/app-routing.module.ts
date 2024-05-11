import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SiginComponent } from './screens/sigin/sigin.component';
import { AdminComponent } from './screens/admin (vehiclemanagement)/admin.component';
import { AboutComponent } from './screens/about/about.component';
import { CostumermanagementComponent } from './screens/costumermanagement/costumermanagement.component';

import { AuthGuard } from './auth.guard';
const routes: Routes = [ 
  { path: 'signin', component: SiginComponent, title: 'Sign In' },
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  { path: 'customerDashboard', component: HomeComponent, title: 'Home', canActivate:[AuthGuard] },
  { path: 'signUp', component: SignupComponent, title: 'Sign Up' },
  { path: 'admin', component: AdminComponent, title: 'Admin' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'costumermanagement', component: CostumermanagementComponent, title: 'Costumer Management' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
