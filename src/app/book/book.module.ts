import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDataService} from "./shared/book-data.service";
import {bookRouting} from "./book.routing";
import {ConfirmCanDeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookReactiveEditComponent} from "./book-reactive-edit/book-reactive-edit.component";
import { ShoutPipe } from './shared/shout.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    bookRouting
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookReactiveEditComponent,
    ShoutPipe
  ],
  providers: [
    BookDataService,
    ConfirmCanDeactivateGuardService
  ]
})
export class BookModule {
}
