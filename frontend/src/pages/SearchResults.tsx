import api from '@/services/api';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_URL } from '@/constants/api';
import { Product } from '@/models';
import ProductCard from '@/components/product/ProductCard';
import ProductCardSkeleton from '@/components/product/ProductCardSkeleton';
import Breadcrumb from '@/components/common/Breadcrumb';

const SearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const searchProducts = async (query: string) => {
    try {
      setLoading(true);
      const { data } = await api.get(PRODUCTS_URL, {
        params: {
          q: query,
        },
      });

      setProducts(data.items);
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const search = searchParams.get('search')?.trim();

    if (search) {
      searchProducts(search);
    }
  }, [searchParams]);

  const handleRedirect =
    (item: Product) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      navigate(`/items/${item.id}`, {
        state: {
          product: item,
          categories: categories,
        },
      });
    };

  return (
    <>
      <Breadcrumb items={categories} className="mb-4" />
      <div className="rounded overflow-hidden px-4 bg-white">
        {!loading &&
          products.map((product: Product) => (
            <div className="[&:not(:last-child)]:border-b border-background">
              <Link
                to={`/items/${product.id}`}
                key={product.id}
                onClick={handleRedirect(product)}
              >
                <ProductCard key={product.id} product={product} />
              </Link>
            </div>
          ))}
        {loading &&
          Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton
              key={index}
              className="[&:not(:last-child)]:border-b border-background"
            />
          ))}
      </div>
    </>
  );
};

export default SearchResults;
