import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import About from './components/About/About.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>fetch('http://localhost:5000/addcoffee')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatecoffee',
        element: <UpdateCoffee></UpdateCoffee>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
