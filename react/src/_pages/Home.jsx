import React from 'react';
import BookLoader from '/src/_components/Loaders/BookLoader';

const Home = () => {
	return (
		<div>
			<BookLoader page="1" defaultSearch={true} />
		</div>
	)
}

export default Home