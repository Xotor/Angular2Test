import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDataService} from "./shared/book-data.service";
import {bookRouting} from "./book.routing";
import {ConfirmCanDeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from "./book-edit/book-edit.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    bookRouting
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  providers: [
    BookDataService,
    ConfirmCanDeactivateGuardService
  ]
})
export class BookModule {
}
