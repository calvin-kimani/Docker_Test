import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <Link to={`/books/${book.url}`} className="bg-white space-y-2 m-4 grid grid-cols-2 gap-1 shadow-lg rounded-lg">
        <div className="col-span-1 p-2">
            <img src="/images/bookcover.jpg" alt={book.title} className="w-full h-full" />
        </div>
      
        <div className="col-span-1 flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-gray-800 line-clamp-7 break-words">{book.title}</h3>    
            <h3 className="text-blue-400 font-bold italic text-xs">{book.author}</h3>
            <h3 className="font-bold text-lg">${book.price}</h3>
            <form action="">
                <button className="py-2 px-4 bg-orange-400 rounded-lg font-bold">
                    Buy
                </button>
            </form>          
        </div>
    </Link>
  );
};

export default Book;