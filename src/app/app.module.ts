import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccessComponent } from './components/access/access.component';
import { BannerComponent } from './components/access/banner/banner.component';
import { LoginComponent } from './components/access/login/login.component';
import { RegisterComponent } from './components/access/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/home/timeline/timeline.component';
import { ROUTES } from './app.routes';
import { AuthGuardService } from './shared/services/authentication/auth-guard.service';
import { NewPublicationComponent } from './components/home/new-publication/new-publication.component';
import { PublicationsService } from './shared/services/publications/publications.service';
import { UploadProgressService } from './shared/services/progress/upload-progress.service';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TimelineComponent,
    NewPublicationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    AuthGuardService,
    PublicationsService,
    UploadProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
