import {Injectable} from "@angular/core";
import {Book} from "./book";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";

@Injectable()
export class BookDataService {

  private baseUrl: string = "http://localhost:4730/books";
  private books: Book[];

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {
    console.log("BookDataService.getBooks");
    return this.http.get(this.baseUrl)
      .map((response: Response) => response.json());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    console.log("BookDataService.getBookByIsbn");
    return this.http.get(this.baseUrl + "/" + isbn)
      .map((response: Response) => response.json());
  }
}
