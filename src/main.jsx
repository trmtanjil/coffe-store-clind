import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './layout/Mainlayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffe from './Components/AddCoffe.jsx';
import Header from './Components/Header.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import CoffeCard from './Components/CoffeCard.jsx';
import CoffeDetails from './Components/CoffeDetails.jsx';
import Signin from './Components/Signin.jsx';
import Singnup from '../Singnup.jsx';
import AugthProvider from './context/AugthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[
    {
      index:true, 
      loader:()=>fetch('http://localhost:5000/coffes'),
      Component:Home,
    },
    {
      path:'addcoffe',
      Component:AddCoffe,
    },
    {
      path:'header',
      Component:Header,
    },
    {
      path:'updadetcoffe/:id',
      loader:({params})=>fetch(`http://localhost:5000/coffes/${params.id}`),
      Component:UpdateCoffe,
    },
     {
      path:'coffecard',
      Component:CoffeCard,
     },
     {
      path:'coffedetails/:id',
      loader:({params})=>fetch(`http://localhost:5000/coffes/${params.id}`),
      Component:CoffeDetails,
     },
     {
      path:'signin',
      Component:Signin,
     },
     {
      path:'signup',
      Component:Singnup,
     },
     {
      path:'users',
      loader:()=>fetch('http://localhost:5000/users'),
      Component:Users,
     }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AugthProvider>
        <RouterProvider router={router} />
    </AugthProvider>
  </StrictMode>,
)
