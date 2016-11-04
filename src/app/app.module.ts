import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BookListComponent} from "./book-list/book-list.component";
import {InOutComponent} from "./in-out/in-out.component";
import {BookDataService} from "./shared/book-data.service";
import {routing} from "./app.routing";
import { PlaygroundComponent } from './playground/playground.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    InOutComponent,
    PlaygroundComponent,
    BookDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
