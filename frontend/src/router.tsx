import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/layout/Default';
import Home from '@/pages/Home';
import SearchResults from '@/pages/SearchResults';
import ProductDetail from '@/pages/ProductDetail';
import NotFound from '@/pages/NotFound';
import Exception from '@/pages/Exception';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/items', element: <SearchResults /> },
      { path: '/items/:id', element: <ProductDetail /> },
      { path: '*', element: <NotFound /> },
      { path: '/500', element: <Exception /> },
    ],
  },
]);

export default router;
