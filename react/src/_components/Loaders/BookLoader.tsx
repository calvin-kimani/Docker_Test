import React, { useState, useEffect } from 'react';
import Book from '/src/_components/Cards/Book';
import Search from '/src/_components/Navbar/Search';
import axiosClient from '/axios-client';

const BookLoader = ({ page, defaultSearch = true, searchMode = false, search = null }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const fetchBooks = (pageNumber) => {
    axiosClient
      .get(`/books?page=${pageNumber}`)
      .then(({ data }) => {
        if (data.books && data.books.length !== 0) {
          setBooks(data.books);
        } else {
          setError('No books found');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching books');
      });
  };

  const searchBooks = (search) => {
    axiosClient
      .post(`/books/search`, { title: search })
      .then(({ data }) => {
        if (data.books && data.books.length !== 0) {
          setBooks(data.books);
        } else {
          setError('No books found');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching books');
      });
  };

  useEffect(() => {
    if (searchMode) {
      searchBooks(search);
    } else {
      fetchBooks(page);
    }
  }, [page, searchMode]);

  return (
    <>
      {defaultSearch && <Search />}
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}

        {error && <div>{error}</div>}
      </div>
    </>
  );
};

export default BookLoader;
