import {Component, OnInit} from "@angular/core";
import {Book, BookDataService} from "../shared";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookData: BookDataService) {
    console.log("BookListComponent.constructor");
  }

  ngOnInit() {
    console.log("BookListComponent.ngOnInit");
    this.bookData.getBooks()
      .subscribe(
        data => {
          console.log("Success: " + data);
          this.books = data;
        },
        err => {
          console.log("Error: " + err);
        },
        () => {
          console.log("Complete")
        }
      );
    console.log("BookListComponent.ngOnInit finished");
  }
}
