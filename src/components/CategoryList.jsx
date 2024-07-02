// components/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Categories</h2>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug}`} className="text-blue-500">{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
