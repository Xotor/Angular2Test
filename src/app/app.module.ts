import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BookModule} from "./book/book.module";
import {PlaygroundModule} from "./playground/playground.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BookModule,
    PlaygroundModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
