import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [{
  path: '',
  redirectTo: '/playground',
  pathMatch: 'full'
}, {
  path: '**',
  component: PageNotFoundComponent
}];

export const routing = RouterModule.forRoot(routes);
