// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search packages..."
        className="border border-gray-300 px-3 py-2 rounded-md mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
    </div>
  );
}

export default SearchBar;
