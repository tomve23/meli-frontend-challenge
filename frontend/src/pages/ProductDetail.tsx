import { useEffect, useState, useMemo } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import api from '@/services/api';
import { PRODUCTS_URL } from '@/constants/api';
import { ProductDetail as ProductDetailType } from '@/models';
import { formatCurrency } from '@/utils/formatterHelper';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductDetailSkeleton from '@/components/product/ProductDetailSkeleton';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<ProductDetailType>();

  if (!location.state) {
    navigate('/');
  }

  const categories = location.state.categories || [];
  const productData = location.state.product || {};

  const { price, decimals } = useMemo(() => {
    if (product) {
      const { amount, decimals } = product.price;

      const [integerPart, decimalPart] = amount.toFixed(decimals).split('.');

      return {
        price: integerPart,
        decimals: decimalPart,
      };
    }

    return {
      price: 0,
      decimals: 0,
    };
  }, [product]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await api.get(`${PRODUCTS_URL}/${id}`);
        setProduct({ ...productData, ...data });
      } catch (error) {
        console.error('Error fetching product details:', error);
        navigate('/500');
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <>
      <Breadcrumb items={categories} className="mb-4" />
      <div className="flex flex-col gap-16 p-8 bg-white rounded-sm">
        {product ? (
          <>
            <div className="grid grid-cols-10 gap-4 pr-8">
              <div className="flex justify-center col-span-7 max-w-[680px]">
                <img
                  src={product.picture}
                  alt={product.title}
                  className="w-full object-contain aspect-square"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <div className="text-sm text-text mb-4">
                  {product.condition}{' '}
                  {product.sold_quantity &&
                    `- ${product.sold_quantity} vendidos`}
                </div>
                <h1 className="text-2xl text-text font-bold mb-4">
                  {product.title}
                </h1>
                <div className="flex items-start mb-8">
                  <span className="text-[46px] text-text">
                    {formatCurrency(price, product.price.currency)}
                  </span>
                  {decimals && (
                    <span className="mt-3 text-2xl">{decimals}</span>
                  )}
                </div>
                <Button size="lg">Comprar</Button>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-x-4 gap-y-8">
              <h2 className="col-span-10 text-[28px] text-text">
                Descripción del producto
              </h2>
              <p className="text-placeholder col-span-7">
                {product.description}
              </p>
            </div>
          </>
        ) : (
          <ProductDetailSkeleton />
        )}
      </div>
    </>
  );
};

export default ProductDetail;
