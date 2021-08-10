import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccessComponent } from './components/access/access.component';
import { BannerComponent } from './components/access/banner/banner.component';
import { LoginComponent } from './components/access/login/login.component';
import { RegisterComponent } from './components/access/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
