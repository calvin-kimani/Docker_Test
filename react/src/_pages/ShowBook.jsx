import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '/axios-client';

const ShowBook = () => {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    const fetchBookDetails = (bookId) => {
        axiosClient.get(`/books/${bookId}`)
            .then(({ data }) => {            
                if (data && data.book) {
                    setBook(data.book);
                }
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            });
    };

    useEffect(() => {
        fetchBookDetails(bookId);
    }, [bookId]);

    return (
        <div className="flex flex-1 px-8">
		    <div className="flex flex-col gap-2 p-4">
		        <div>
		            <img src="/images/bookcover.jpg" alt="" className="w-[250px] h-auto rounded-md shadow-md" />
		        </div>
		        <p className="text-sm text-gray-600">Price: <span className="italic text-green-500 font-bold">${book.price}</span></p>
		        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">Buy</button>
		    </div>

		    <div className="flex-1 p-4 rounded-lg space-y-2">
		        <h2 className="text-3xl text-gray-800">{book.title}</h2>
		        <p>by <span className="italic text-blue-400 font-bold text-lg">{book.author}</span></p>
		        <p className="text-gray-700">ISBN: <span className="font-semibold">{book.isbn}</span></p>
		        <p className="text-gray-700">Publisher: <span className="font-semibold">{book.publisher}</span></p>
		        <p className="text-gray-700">Publication Date: <span className="font-semibold">{book.publication_year}</span></p>
		        <p className="text-gray-700">Pages: <span className="font-semibold">{book.pages}</span></p>
		        <p className="text-gray-700">Language: <span className="font-semibold">{book.language}</span></p>
		        <p className="text-gray-700">Genre: <span className="font-semibold">{book.genre}</span></p>
		        <p className="bg-gray-200 rounded-md p-2">{book.description}</p>
		    </div>
		</div>
    );
};

export default ShowBook;
