import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <section className="listContainer">
      <ul className="booksList">
        {books.map((book) => (
          <Book key={book.ID} book={book} />
        ))}
      </ul>
      <AddBook />
    </section>
  );
};

export default BookList;
