// src/components/BookItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';

const BookItem = ({ book, setBook }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: 'DELETE_BOOK', payload: book.id });
    };

    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => setBook(book)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default BookItem;
