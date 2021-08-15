import { Routes } from "@angular/router";

import { AccessComponent } from "./components/access/access.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuardService } from "./shared/services/authentication/auth-guard.service";

export const ROUTES: Routes = [
    { path: '', component: AccessComponent },
    { path: 'home', component: HomeComponent, canActivate: [ AuthGuardService ] },
]