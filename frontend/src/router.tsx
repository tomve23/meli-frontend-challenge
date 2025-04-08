import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/layout/Default';
import Home from '@/pages/Home';
import SearchResults from '@/pages/SearchResults';
import ProductDetail from '@/pages/ProductDetail';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/items', element: <SearchResults /> },
      { path: '/items/:id', element: <ProductDetail /> },
    ],
  },
]);

export default router;
