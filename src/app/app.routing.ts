import {Routes, RouterModule} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [{
  path: '',
  redirectTo: '/playground',
  pathMatch: 'full'
}, {
  path: 'books',
  component: BookListComponent
}, {
  path: 'books/:isbn',
  component: BookDetailComponent
}, {
  path: 'playground',
  component: PlaygroundComponent
}, {
  path: "**",
  component: PageNotFoundComponent
}];

export const routing = RouterModule.forRoot(routes);
