import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        item_id: uuidv4(),
        title,
        author,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <section>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
