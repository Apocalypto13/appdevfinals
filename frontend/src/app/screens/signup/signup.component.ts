import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../service/server.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
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
  constructor(private router: Router, private serverService: ServerService) {}

  signUp() {
    const userData = {
      firstname: this.firstname,
      middlename: this.middlename,
      lastname: this.lastname,
      email: this.email,
      contact: this.contact,
      role: this.role,
      status: this.status,
      password: this.password,
      confirm_password: this.confirm_password,
    };
    if (this.password !== this.confirm_password) {
      this.errorMessage = "Password didn't match! Please try again.";
    }
    this.serverService.signUp(userData).subscribe(
      (response: any) => {
        this.successMessage = response.message;
       this.router.navigate(['/signIn'])
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
