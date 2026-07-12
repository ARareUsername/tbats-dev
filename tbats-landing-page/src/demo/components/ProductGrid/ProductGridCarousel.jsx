import React from 'react';

export default function ProductGridCarousel({ children }) {
  return (
    <div className="p-grid-carousel-wrapper">
      <div className="p-grid-carousel">
        {children}
      </div>
    </div>
  );
}
