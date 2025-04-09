import api from '@/services/api';
import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_URL } from '@/constants/api';
import { PAGE_TITLE } from '@/constants/setup';
import { Product } from '@/models';
import { capitalize } from '@/utils/formatterHelper';
import ProductCard from '@/components/product/ProductCard';
import ProductCardSkeleton from '@/components/product/ProductCardSkeleton';
import Breadcrumb from '@/components/common/Breadcrumb';
import NotFound from '@/assets/images/NotFound.svg?react';

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
      navigate('/500');
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

  const pageTitle = useMemo(() => {
    const search = searchParams.get('search')?.trim();

    if (search) {
      const title = search
        .split(' ')
        .map((word) => capitalize(word))
        .join(' ');

      return `${title} | ${PAGE_TITLE}`;
    }

    return 'Resultados de búsqueda';
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
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content={`Resultados de búsqueda para "${searchParams.get('search')}"`}
      />
      <Breadcrumb items={categories} className="mb-4" />
      <div className="rounded overflow-hidden px-4 bg-white">
        {!loading &&
          products.map((product: Product) => (
            <div
              key={product.id}
              className="[&:not(:last-child)]:border-b border-background"
            >
              <Link
                to={`/items/${product.id}`}
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

        {!loading && products.length === 0 && (
          <div className="flex items-center justify-center p-8 gap-10 text-text">
            <NotFound />
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">
                No hay publicaciones que coincidan con tu búsqueda
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">Revisá la ortografía</span> de
                  la palabra
                </li>
                <li>
                  Utilizá{' '}
                  <span className="font-semibold">palabras más genéricas</span>{' '}
                  o menos específicas
                </li>
                <li>
                  <span className="font-semibold">
                    Intentá con otra búsqueda
                  </span>{' '}
                  para encontrar un producto similar
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
