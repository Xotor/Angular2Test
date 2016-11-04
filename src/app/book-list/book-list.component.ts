import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Book} from '../shared';
import {BookDataService} from "../shared";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();
  x: number;
  y: number;
  books: Book[];

  constructor(private bookData: BookDataService) {
    console.log("BookListComponent.constructor");
    bookData.getBooks()
      .subscribe(
        data => {
          console.log("Success: " + data);
          this.books = data;
        },
        err => console.log("Error: " + err),
        () => console.log("Complete")
      )
      .unsubscribe();
  }

  ngOnInit() {
    console.log("BookListComponent.ngOnInit");
  }

  sendPing() {
    console.log("BookListComponent.sendPing");
    this.ping.emit("Ping!!");
  }

  onMousemove({clientX, clientY}:MouseEvent) {
    this.x = clientX;
    this.y = clientY;
  }
}
