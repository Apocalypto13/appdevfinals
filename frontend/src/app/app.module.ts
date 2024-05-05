import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SiginComponent } from './screens/sigin/sigin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SiginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
