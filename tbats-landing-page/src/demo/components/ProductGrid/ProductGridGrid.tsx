import type { ProductGridProps } from '@/types/demo';

export default function ProductGridGrid({ children }: ProductGridProps) {
  return (
    <div className="p-grid-grid">
      {children}
    </div>
  );
}
