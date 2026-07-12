import type { ProductGridProps } from '@/types/demo';

export default function ProductGridCarousel({ children }: ProductGridProps) {
  return (
    <div className="p-grid-carousel-wrapper">
      <div className="p-grid-carousel">{children}</div>
    </div>
  );
}
