import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
private signUpUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  signUp(data: any){
    return this.http.post(`${this.signUpUrl}/signUp`,data,{
      responseType:'text'
    })
  }
  signIn(data: any){
    return this.http.post(`${this.signUpUrl}/signIn`,data,{
      responseType:'json'
    })
  }
}
