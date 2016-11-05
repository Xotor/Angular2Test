import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  private book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) {
    console.log("BookEditComponent.constructor");
  }

  ngOnInit() {
    console.log("BookEditComponent.ngOnInit");
    this.route.params.subscribe((params: {isbn: string}) => {
      this.bookData.getBookByIsbn(params.isbn).subscribe((book: Book) => this.book = book);
    });
  }

  save(data: Book){
    console.log("BookEditComponent.save");
    console.log(data);
  }

}
