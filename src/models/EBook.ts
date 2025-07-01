import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
    author.addBook(this);
  }

  getDescription(): string {
    return `EBook: '${this.title}' by ${this.author.getName()}, available at ${this.url}.`;
  }
}
