import {Publisher} from "./publisher";

export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: Publisher;
}
