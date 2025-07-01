import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) return false;
    copy.markBorrowed();
    reader.borrowCopy(copy);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): void {
    copy.markReturned();
    reader.returnCopy(copy);
  }
}
