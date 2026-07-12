interface ProductPlaceholderProps {
  name: string;
  category: string;
}

export default function ProductPlaceholder({ name, category }: ProductPlaceholderProps) {
  // Get first letters of product name for editorial initials (e.g. Oak Lounge Chair -> OL)
  const initials = name
    ? name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()
    : 'P';

  return (
    <div className="p-placeholder-wrap">
      <div className="p-placeholder-bg-art" />
      <div className="p-placeholder-content">
        <span className="p-placeholder-initials">{initials}</span>
        <span className="p-placeholder-tag">{category}</span>
      </div>
    </div>
  );
}
