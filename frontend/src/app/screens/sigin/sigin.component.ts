import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
constructor (private router:Router){}
goToPage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}
