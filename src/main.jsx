import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: "homepage"
  },
  {
    path:"/books",
    element:"books"
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />,



  </StrictMode>,
)
