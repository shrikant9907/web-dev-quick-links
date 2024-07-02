// pages/CategoryPackagesPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PackageCard from '../components/PackageCard';

const CategoryPackagesPage = () => {
  const { category } = useParams();

  // Fetch packages filtered by category using Redux or API call

  const packages = [
    { id: 1, name: 'Package 1', description: 'Description of Package 1' },
    { id: 2, name: 'Package 2', description: 'Description of Package 2' },
    // Add more packages as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{category} Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map(pkg => (
          <PackageCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPackagesPage;
