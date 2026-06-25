import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: <CreateBlog />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
