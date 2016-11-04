import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor() {
    console.log("BookDetailComponent.constructor");
  }

  ngOnInit() {
    console.log("BookDetailComponent.ngOnInit");
  }

}
