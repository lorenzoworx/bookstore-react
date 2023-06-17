import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(50);

  const handleRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };

  const handleProgress = () => {
    let pct = percentage;
    if (pct < 100) {
      setPercentage(pct += 5);
    }
  };

  return (
    <li>
      <div className="bookContainer">
        <span className="catSpan">Category</span>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="actionsContainer">
          <button className="commentsBtn" type="button">Comments</button>
          <button className="removeBtn" type="button" onClick={() => handleRemove(book.item_id)}>Remove</button>
          <button className="editBtn" type="button">Edit</button>
        </div>
      </div>
      <div className="progressContainer">
        <div className="circleProgress">
          <CircularProgressbar className="circle" value={percentage} />
          <div className="circleProgressText">
            <p className="progressT1">
              {percentage}
              %
            </p>
            <p className="progressT2">Completed</p>
          </div>
        </div>
        <div className="chapterProgress">
          <p className="chapterText">Current Chapter</p>
          <p className="chapterNo">Chapter 5</p>
          <button className="updateBtn" type="button" onClick={handleProgress}>Update Progress</button>
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
