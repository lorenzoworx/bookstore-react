import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="bookContainer">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="actionsContainer">
          <button type="button">edit</button>
          <button type="button">Comment</button>
          <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>delete</button>
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
