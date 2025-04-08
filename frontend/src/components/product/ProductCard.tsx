import { Product } from '@/models';
import { formatCurrency } from '@/utils/formatterHelper';
import Shipping from '@/assets/images/Shipping.png';
import { cn } from '@/lib/utils';

const ProductCard = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const {
    title,
    picture,
    price,
    address,
    free_shipping: freeShipping,
  } = product;

  return (
    <div className={cn('flex w-full py-4 gap-4 select-none', className)}>
      <img
        src={picture}
        alt={title}
        className="flex-shrink-0 size-[180px] rounded object-contain"
      />
      <div className="grid grid-cols-8 gap-4 flex-auto pt-4">
        <div className="flex flex-col gap-8 col-span-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-text">
              {formatCurrency(price.amount, price.currency)}
            </span>
            {freeShipping && <img src={Shipping} alt="Free Shipping" />}
          </div>
          <h2 className="text-lg text-text line-clamp-2">{title}</h2>
        </div>
        <div className="col-span-2 col-start-7 text-xs">
          {address.state || address.city}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
