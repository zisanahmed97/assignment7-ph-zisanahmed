import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Mainlayout from './Components/MainLayout/Mainlayout';
import Home from './Components/Home/Home';
import UserDetails from './Components/UserDetails/UserDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children:[
      {
        index: true,
        element:<Home></Home>
      },
      {
        path:"/userdetails",
        element: <UserDetails></UserDetails>
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },

]);




createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />,



  </StrictMode>,
)
