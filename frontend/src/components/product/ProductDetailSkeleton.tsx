import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const ProductDetailSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-4 bg-white rounded-sm', className)}>
      <div className="grid grid-cols-10 gap-4 pr-8">
        <div className="col-span-7 flex flex-col gap-4">
          <Skeleton className="w-full aspect-square" />
        </div>
        <div className="col-span-3 flex flex-col">
          <Skeleton className="h-6 w-28 mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-8" />
          <Skeleton className="h-12 w-full mb-8" />
          <Skeleton className="h-12 w-full mb-8" />
        </div>
      </div>
      <Skeleton className="h-[200px] w-full" />
    </div>
  );
};

export default ProductDetailSkeleton;
