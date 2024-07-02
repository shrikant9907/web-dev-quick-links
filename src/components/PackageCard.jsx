import React from 'react';

const PackageCard = ({ packageName, popularity, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{packageName}</h2>
      <p className="text-gray-600 mb-2">Popularity: {popularity}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default PackageCard;
