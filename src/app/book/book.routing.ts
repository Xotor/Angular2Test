import {Routes, RouterModule} from "@angular/router";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {ConfirmCanDeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookReactiveEditComponent} from "./book-reactive-edit/book-reactive-edit.component";

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: 'details/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmCanDeactivateGuardService]
  }, {
    path: 'edit/:isbn',
    component: BookEditComponent
  }, {
    path: 'new',
    component: BookReactiveEditComponent
  }]
}]

export const bookRouting = RouterModule.forChild(routes);
