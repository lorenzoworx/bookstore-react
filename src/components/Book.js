import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };
  return (
    <li>
      <div className="bookContainer">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="actionsContainer">
          <button type="button">edit</button>
          <button type="button">Comment</button>
          <button type="button" onClick={() => handleRemove(book.item_id)}>delete</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
