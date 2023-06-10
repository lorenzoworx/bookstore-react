import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = [
    {
      ID: 1,
      Title: 'The Hunger Games',
      Author: 'Suzanne Collins',
    },
    {
      ID: 2,
      Title: 'Dune',
      Author: 'Frank Herbert',
    },
    {
      ID: 3,
      Title: 'Capital in the Twenty-First Century',
      Author: 'Suzanne Collins',
    },
  ];

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
