import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
    <div className="min-h-screen flex flex-col">
        <nav className="bg-blue-600 text-white p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/categories" className="hover:underline">Categories</Link></li>
            </ul>
        </nav>
        <main className="flex-1 p-4">
            <Outlet />
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
            &copy; 2025 My Store
        </footer>
    </div>
);

export default Layout;