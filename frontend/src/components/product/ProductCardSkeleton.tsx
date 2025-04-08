import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const ProductCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex w-full py-4 gap-4 select-none', className)}>
      <Skeleton className="flex-shrink-0 size-[180px] rounded object-contain" />
      <div className="grid grid-cols-8 gap-4 flex-auto pt-4">
        <div className="flex flex-col gap-8 col-span-5">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-[100px]" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
