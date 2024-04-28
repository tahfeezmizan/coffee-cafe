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
import SingUp from './components/SingUp/SingUp.jsx';
import SingIn from './components/SingIn/SingIn.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import User from './components/User/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffee-cafe-server.vercel.app/addcoffee')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-cafe-server.vercel.app/addcoffee/${params.id}`),
      },
      {
        path: 'singup',
        element: <SingUp></SingUp>
      },
      {
        path: 'singin',
        element: <SingIn></SingIn>
      },
      {
        path: 'users',
        element: <User></User>,
        loader: () => fetch('https://coffee-cafe-server.vercel.app/users')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
