import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() {
    console.log("BookComponent.constructor");
  }

  ngOnInit() {
    console.log("BookComponent.ngOnInit");
  }
}
