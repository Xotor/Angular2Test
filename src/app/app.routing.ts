import {Routes, RouterModule} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

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
}];

export const routing = RouterModule.forRoot(routes);
