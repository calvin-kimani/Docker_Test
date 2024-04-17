import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BookLoader from '/src/_components/Loaders/BookLoader';

const Search = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');

    return (
        <div>
            <BookLoader page="1" searchMode="true" search={title} />
        </div>
    );
}

export default Search;
