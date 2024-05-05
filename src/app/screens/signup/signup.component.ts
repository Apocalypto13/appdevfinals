import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router:Router){}

  goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`])
  }
}