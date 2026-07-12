import React from 'react';
import defaultCategories from '../../data/categories';

export default function CategoryBarEditorial({ activeCategory, onSelectCategory, categories = defaultCategories }) {
  return (
    <div className="p-category-bar-editorial">
      <div className="p-category-container">
        {categories.map((cat) => {
          const isActive = cat.slug === activeCategory;
          return (
            <button
              key={cat.slug}
              className={`p-category-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.slug)}
            >
              <span className="p-category-num">/0{categories.indexOf(cat) + 1}</span>
              <span className="p-category-name">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
