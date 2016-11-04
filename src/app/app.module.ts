import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {InOutComponent} from "./in-out/in-out.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {routing} from "./app.routing";
import {BookModule} from "./book/book.module";

@NgModule({
  declarations: [
    AppComponent,
    InOutComponent,
    PlaygroundComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BookModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
