import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div className='bg-black h-screen'>
      <Outlet/>
    </div>
  )
}

export default Auth
