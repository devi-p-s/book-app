// src/App.jsx
import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Book Management</h1>
            <BookForm book={selectedBook} setBook={setSelectedBook} />
            <BookList setBook={setSelectedBook} />
        </div>
    );
};

export default App;
