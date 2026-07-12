import type { ProductGridProps } from '@/types/demo';

export default function ProductGridMasonry({ children }: ProductGridProps) {
  return (
    <div className="p-grid-masonry">
      {children}
    </div>
  );
}
