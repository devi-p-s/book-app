// src/components/BookForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const BookForm = ({ book, setBook }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(book ? book.title : '');
    const [author, setAuthor] = useState(book ? book.author : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: book ? book.id : Date.now(), title, author };

        if (book) {
            dispatch({ type: 'EDIT_BOOK', payload: newBook });
        } else {
            dispatch({ type: 'ADD_BOOK', payload: newBook });
        }

        setTitle('');
        setAuthor('');
        setBook(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">{book ? 'Edit Book' : 'Add Book'}</button>
        </form>
    );
};

export default BookForm;
