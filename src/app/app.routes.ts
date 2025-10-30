import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';


export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: Home },
]

export const routing = RouterModule.forRoot(routes);