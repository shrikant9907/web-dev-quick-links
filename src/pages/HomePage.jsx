import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchTerm}`);
      setPackages(response.data.objects); // Assuming response.data.objects is an array of search results
      setLoading(false);
    } catch (error) {
      console.error('Error searching packages:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search NPM Packages</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search Packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {packages.map((pkg) => (
            <li key={pkg.package.name}>{pkg.package.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
