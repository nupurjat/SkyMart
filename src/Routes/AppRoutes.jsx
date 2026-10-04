import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Auth from '../layout/Auth';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../layout/Main';
import ProtectedRoutes from './ProtectedRoutes';


const AppRoutes = () => {
    let router=createBrowserRouter([
        {  path:"/" ,
           element:<Auth/>,
           children:[
            {
                path:"",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register />
            }
           ]
        },
        {
            path:"/main",
            element:<ProtectedRoutes/>,
            children:[
                {
                    path:"",
                    element:<Main/>
                }
            ]
        }
       
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
