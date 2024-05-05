import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ServerService } from '../../service/server.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
  firstname: string = '';
  middlename: string = '';
  lastname: string = '';
  email: string = '';
  contact: string = '';
  role: string = 'Customer';
  status: boolean = true;
  password: string = '';
  confirm_password: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;
  loading: boolean = false;
constructor (private router:Router, private serverService: ServerService){}

signIn() {
  let bodyData = {
    email: this.email, 
    password: this.password, 
  };
  this.loading = true;
  this.serverService.signIn(bodyData).subscribe(
    (response: any) => {
      if (response && response.data && response.data.token) {
        this.loading = false;
        sessionStorage.setItem('jwt_token', response.data.token);
        // Save user info to session storage or state
        sessionStorage.setItem('user_info', JSON.stringify(response.data.firstname)); // Assuming user info is returned as 'user'
        sessionStorage.setItem('user_id', response.data.id); // Store user ID in session storage
        switch (response.data.role) {
          case 'Admin':
            this.router.navigate(['/adminDashboard']);
            break;
          case 'Customer':
            this.router.navigate(['/customerDashboard']);
            break;
          default:
            this.router.navigate(['/']);
            break;
        }
      } else {
        this.loading = false;
        this.errorMessage = 'Please make sure you already have an account.';
        setTimeout(() => {
          this.errorMessage = null;
        }, 2000);
      }
    },
    (error) => {
      this.loading = false;
     this.errorMessage = error.error.message;
     setTimeout(() => {
      this.errorMessage = null;
     }, 2000);
    }
  );
}    
goToPage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}
