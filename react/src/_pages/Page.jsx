import React from 'react';
import { useParams } from 'react-router-dom';
import BookLoader from '/src/_components/Loaders/BookLoader';

const Page = () => {
	
	const {page} = useParams();
	
	return (
		<div>
			<BookLoader page={page} />
		</div>
	)
}

export default Page