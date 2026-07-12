import React from 'react';
import defaultCategories from '../../data/categories';

export default function CategoryBarPlayful({ activeCategory, onSelectCategory, categories = defaultCategories }) {
  return (
    <div className="p-category-bar-playful">
      <div className="p-category-container">
        {categories.map((cat) => {
          const isActive = cat.slug === activeCategory;
          return (
            <button
              key={cat.slug}
              className={`p-category-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.slug)}
            >
              <span className="p-playful-icon">🏷️</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
