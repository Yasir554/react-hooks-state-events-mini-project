import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  // Check if categories is undefined or null before mapping
  if (!categories) {
    return null; // or return a loading state
  }

  return (
    <div className="categories">
      <h5>Filter by Category:</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;