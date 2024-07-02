// PackageDetailsPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PackageDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example usage of useParams and useNavigate
  const handleClick = () => {
    navigate(`/packages/${id}/edit`);
  };

  return (
    <div>
      <h2>Package Details Page</h2>
      <p>Package ID: {id}</p>
      <button onClick={handleClick}>Edit Package</button>
    </div>
  );
};

export default PackageDetailsPage;
