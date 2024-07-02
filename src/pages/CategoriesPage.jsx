// pages/CategoriesPage.jsx
import React from 'react';
import CategoryList from '../components/CategoryList';

const CategoriesPage = () => {
  const categories = [
    { id: 1, name: 'UI Components', slug: 'ui-components' },
    { id: 2, name: 'State Management', slug: 'state-management' },
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <CategoryList categories={categories} />
    </div>
  );
}

export default CategoriesPage;
