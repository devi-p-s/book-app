// src/components/BookList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';

const BookList = ({ setBook }) => {
    const books = useSelector((state) => state.book.books);
    const dispatch = useDispatch();

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} book={book} setBook={setBook} />
            ))}
        </div>
    );
};

export default BookList;
