import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="bookContainer">
        <h2>{book.Title}</h2>
        <p>{book.Author}</p>
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
    Title: PropTypes.string,
    Author: PropTypes.string,
  }).isRequired,
};

export default Book;
