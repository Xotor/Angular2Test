import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  x: number;
  y: number;

  constructor() {
  }

  ngOnInit() {
  }

  onMousemove({clientX, clientY}:MouseEvent) {
    this.x = clientX;
    this.y = clientY;
  }
}
