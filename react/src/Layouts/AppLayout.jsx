import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '/src/_components/Navbar/Navbar';

const AppLayout = () => {
	return (
		<div className="w-screen h-screen flex flex-col overflow-x-hidden">
			<Navbar />
			<main className="flex-1">
				<Outlet />	
			</main>
		</div>
	)
}

export default AppLayout