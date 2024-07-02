// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Rapid Dev Links</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
