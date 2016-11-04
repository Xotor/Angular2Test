import {Routes, RouterModule} from "@angular/router";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [{
  path: 'books',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  },{
    path: ':isbn',
    component: BookDetailComponent
  }]
}]

export const bookRouting = RouterModule.forChild(routes);
