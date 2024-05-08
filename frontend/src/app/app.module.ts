import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SiginComponent } from './screens/sigin/sigin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { ServerService } from './service/server.service';
import { AdminComponent } from './screens/admin/admin.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, SiginComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('jwt_token'),
        allowedDomains: ['example.com'], // Add the domain(s) where your API is hosted
        disallowedRoutes: [], // Add routes that should not include the JWT token
      },
    }),
  ],
  providers: [
    ServerService,
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
