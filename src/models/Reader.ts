import { Copy } from './Copy';

export class Reader {
  private id: string;
  private name: string;
  private borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  borrowCopy(copy: Copy): void {
    this.borrowedCopies.push(copy);
  }

  returnCopy(copy: Copy): void {
    this.borrowedCopies = this.borrowedCopies.filter(borrowedCopy => borrowedCopy !== copy);
  }

  getName(): string {
    return this.name;
  }
}
