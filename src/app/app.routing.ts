import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [{
  path: '',
  redirectTo: '/playground',
  pathMatch: 'full'
}, {
  path: 'playground',
  loadChildren: "./playground/playground.module#PlaygroundModule"
}, {
  path: 'books',
  loadChildren: "./book/book.module#BookModule"
}, {
  path: '**',
  component: PageNotFoundComponent
}];

export const routing = RouterModule.forRoot(routes);
