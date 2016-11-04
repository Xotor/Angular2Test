import {Routes, RouterModule} from "@angular/router";
import {PlaygroundComponent} from "./playground/playground.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BookComponent} from "./book/book.component";

export const routes: Routes = [{
  path: '',
  redirectTo: '/playground',
  pathMatch: 'full'
},{
  path: 'playground',
  component: PlaygroundComponent
}, {
  path: '**',
  component: PageNotFoundComponent
}];

export const routing = RouterModule.forRoot(routes);
