import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
                {/* Ліва частина */}
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/categories" className="hover:underline">Categories</Link></li>
                    <li><Link to="/products" className="hover:underline">Products</Link></li>
                </ul>

                {/* Права частина */}
                <div>
                    <Link to="/login" className="hover:underline  mr-4">Вхід</Link>
                    <Link to="/register" className="hover:underline">Реєстрація</Link>
                </div>
            </nav>

            <main className="flex-1 p-4">
                <Outlet />
            </main>

            <footer className="bg-gray-800 text-white text-center p-4">
                &copy; 2025 My Store
            </footer>
        </div>
    );
}
