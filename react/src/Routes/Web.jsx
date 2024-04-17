import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from '/src/Layouts/AppLayout';

import Home from '/src/_pages/Home';
import Page from '/src/_pages/Page';
import Search from '/src/_pages/Search';
import ShowBook from '/src/_pages/ShowBook';

const Web = () => {
	return (
		<Routes>
			<Route path="/books" element={ <AppLayout/> } >
				<Route path="" index element={ <Home/> } />		
				<Route path="page/:page" element={ <Page/> } />
				<Route path=":bookId" element={ <ShowBook/> } />
				<Route path="search" element={ <Search/> } />
			</Route>			
		</Routes>
	)
}

export default Web