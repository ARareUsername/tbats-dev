import type { ProductGridProps } from '@/types/demo';

export default function ProductGridList({ children }: ProductGridProps) {
  return (
    <div className="p-grid-list">
      {children}
    </div>
  );
}
