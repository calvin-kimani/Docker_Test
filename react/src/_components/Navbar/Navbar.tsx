import React from 'react';

const Navbar = () => {
    return (
        <nav className="px-2 py-4 w-full border-b border-slate-200">
            <div className="mx-auto flex items-center justify-between h-full w-full">
                <a href="/" className="font-bold">Online BookStore</a>

                <ul className="flex space-x-4">
                    <li>
                        <a href="/about" className="">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
