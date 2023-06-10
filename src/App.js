import {
  createBrowserRouter as createRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import BookList from './components/BookList';
import Categories from './components/Categories';
import RouteLayout from './components/RouteLayout';

const routes = createRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
