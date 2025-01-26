import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CreateCategoryPage from "./pages/CreateCategoryPage.tsx";

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="categories" >
                    <Route index element={<CategoriesPage />} />
                    <Route path="create" element={<CreateCategoryPage />} />
                </Route>

            </Route>
        </Routes>
    </Router>
);

export default App;