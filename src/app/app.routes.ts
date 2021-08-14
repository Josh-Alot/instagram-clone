import { Routes } from "@angular/router";

import { AccessComponent } from "./components/access/access.component";
import { HomeComponent } from "./components/home/home.component";

export const ROUTES: Routes = [
    { path: '', component: AccessComponent },
    { path: 'home', component: HomeComponent },
]