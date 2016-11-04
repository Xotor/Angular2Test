import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) {
    console.log("BookDetailComponent.constructor");
  }

  ngOnInit() {
    console.log("BookDetailComponent.ngOnInit");
    // Map => SwitchMap => Subscribe
    // this.book$ = this.route.params
    //   .map(params => params['isbn'])
    //   .switchMap(isbn => this.service.getBookByIsbn(isbn))
    //   .subscribe(book => this.book = book);

    // Oder folgendes, aber Probleme bei Pagination!
    // const isbn = this.route.snapshot.params['isbn'];
    // this.bookData.getBookByIsbn(isbn).subscribe((book: Book) => this.book = book);

    // Verkettete subscribes => BAD STYLE
    this.route.params.subscribe((params: {isbn: string}) => {
      this.bookData.getBookByIsbn(params.isbn).subscribe((book: Book) => this.book = book);
    });
  }
}
