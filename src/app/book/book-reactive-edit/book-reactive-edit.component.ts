import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../shared/book";

@Component({
  selector: 'book-reactive-edit',
  templateUrl: 'book-reactive-edit.component.html',
  styleUrls: ['book-reactive-edit.component.css']
})
export class BookReactiveEditComponent implements OnInit {

  form: FormGroup;
  book: Book;

  constructor(private fb: FormBuilder) {
    console.log("BookReactiveEditComponent.constructor");
    this.book = {
      "title": "",
      "subtitle": "",
      "isbn": "",
      "abstract": "",
      "numPages": 0,
      "author": "",
      "publisher": {
        "name": "",
        "url": ""
      }
    }
  }

  ngOnInit() {
    console.log("BookReactiveEditComponent.ngOnInit");
    this.form = this.fb.group({
      title: [
        this.book.title,
        Validators.required
      ],
      subtitle: [
        this.book.subtitle,
        Validators.required
      ],
      isbn: [
        this.book.isbn,
        Validators.compose([Validators.required, Validators.minLength(11)])
      ],
      abstract: [
        this.book.abstract,
        Validators.required
      ],
      numPages: [
        this.book.numPages,
        Validators.required
      ],
      author: [
        this.book.author,
        Validators.required
      ],
      publisher_name: [
        this.book.publisher.name,
        Validators.required
      ],
      publisher_url: [
        this.book.publisher.url,
        Validators.required
      ]
    });
  }

  onSubmit(){
    console.log("BookReactiveEditComponent.onSubmit");
    console.log("Invalid: " + this.form.invalid);
    console.log("Errors:");

    console.log("this.form: " + this.form);
    console.log("this.form.errors: " + this.form.errors);
    console.log("Required: " + this.form.hasError('required',['isbn']));
    console.log("Required: " + this.form.hasError('required',['isbn', "numPages"]));

    this.book = this.form.value;
    console.log(this.book);

    if(!this.form.invalid){
      console.log("Valid Book, send to server...");
    }
  }
}
