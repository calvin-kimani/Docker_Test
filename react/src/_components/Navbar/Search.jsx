import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    
    // Add parentheses when calling useNavigate
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission
        if (searchInput.trim() !== '') navigate(`/books/search?title=${searchInput.trim()}`);
    }

    return (
        <div className="flex justify-center my-8 px-4">
            <form
                onSubmit={handleSearch}
                className="flex items-center border border-black rounded-lg w-full sm:w-1/2"
            >
                <input
                    type="text"
                    name="search"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    className="px-4 py-2 w-full rounded-lg h-full outline-none"
                    id="search"
                    placeholder="Search by title..."
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Search;
