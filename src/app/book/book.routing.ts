import {Routes, RouterModule} from "@angular/router";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {ConfirmCanDeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from "./book-edit/book-edit.component";

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: ':isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmCanDeactivateGuardService]
  }, {
    path: ':isbn/edit',
    component: BookEditComponent
  }]
}]

export const bookRouting = RouterModule.forChild(routes);
