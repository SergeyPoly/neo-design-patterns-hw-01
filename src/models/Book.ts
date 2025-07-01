import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
    author.addBook(this);
  }

  getDescription(): string {
    return `Book: '${this.title}' by ${this.author.getName()}, published in ${this.year}.`;
  }
}