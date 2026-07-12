import type { CategoryBarProps } from '@/types/demo';
import defaultCategories from '../../data/categories';

export default function CategoryBarMinimal({
  activeCategory,
  onSelectCategory,
  categories = [...defaultCategories],
}: CategoryBarProps) {
  return (
    <div className="p-category-bar-minimal">
      <div className="p-category-container">
        {categories.map(cat => {
          const isActive = cat.slug === activeCategory;
          return (
            <button
              key={cat.slug}
              className={`p-category-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.slug)}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
