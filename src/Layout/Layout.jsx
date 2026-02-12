import React from 'react'
import { Outlet ,NavLink} from 'react-router'
function Layout() {
  return (
    <div className='flex flex-col items-center text-3xl gap-2 h-screen'>
      <ul className='flex gap-7 bg-cyan-200 w-full p-4 justify-center items-center'>
        <button className='hover:text-rose-600 border px-2 rounded-2xl bg-blue-200' ><NavLink to="/">Home</NavLink></button>
        <button className='hover:text-rose-600 border px-2 rounded-2xl bg-blue-200' ><NavLink to="post">Post</NavLink></button>
        <button className='hover:text-rose-600 border px-2 rounded-2xl bg-blue-200' ><NavLink to="register">Register</NavLink></button>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Layout