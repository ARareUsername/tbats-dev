import React from 'react';
import defaultCategories from '../../data/categories';

export default function CategoryBarLuxury({ activeCategory, onSelectCategory, categories = defaultCategories }) {
  return (
    <div className="p-category-bar-luxury">
      <div className="p-category-container">
        {categories.map((cat) => {
          const isActive = cat.slug === activeCategory;
          return (
            <button
              key={cat.slug}
              className={`p-category-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.slug)}
            >
              <span className="p-category-btn-text">{cat.name}</span>
              {isActive && <span className="p-category-active-line" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
