import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/booksSlice';

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
        category: null,
      };
      dispatch(postBook(book))
        .then(() => {
          dispatch(addBook(book));
          setTitle('');
          setAuthor('');
        });
    }
  };
  return (
    <section className="addBook">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <input className="formTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input className="formAuthor" type="drop" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
