import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyAuth } from '../context/AuthContext'

const ProtectedRoutes = () => {
  const {loginUSer}=useContext(MyAuth)
  if(!loginUSer){
    return <Navigate to={"/"}/>
  }
  return <Outlet/>
}

export default ProtectedRoutes
