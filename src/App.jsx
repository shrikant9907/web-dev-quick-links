// App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage'; // Ensure this import is correct
import PackagesPage from './pages/PackagesPage';
import PackageDetailsPage from './pages/PackageDetailsPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPackagesPage from './pages/CategoryPackagesPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:id" element={<PackageDetailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryPackagesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
