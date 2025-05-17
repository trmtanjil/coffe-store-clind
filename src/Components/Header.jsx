import React from 'react'
import { Link } from 'react-router'
 
function Header() {
  return (
   <>
  <div className='h-12 bg-[#614518] text-center flex justify-between items-center gap-6'> 
     <div className='flex justify-center items-center'>
      <img className='w-[30px] h[30px]  ' src="https://i.ibb.co/TMc4Lszk/logo1.png" alt="" />
      <p  className='text-2xl text-shadow-blue-50 text-white'> Espresso Emperium</p>
    </div>
    <div className='flex items-center gap-6 mx-4'>
       <div >
    <button className='btn h-7  bg-amber-500'>  <Link to='/'>Home</Link></button>
    </div>
    <div>
    <button className='btn h-7  bg-amber-500'>  <Link to='users'>Uusers</Link></button>
    </div>
    <div>
    <button className='btn h-7  bg-amber-500'>  <Link to='signin'>
    Signin
    </Link></button>
    </div>
    
    <div>
    <button className='btn h-7  bg-amber-500'>  <Link to='signup'>
    SignUp
    </Link></button>
    </div>
    </div>
   
   
  </div>
   </>
  )
}

export default Header