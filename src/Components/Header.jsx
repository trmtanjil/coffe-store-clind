import React from 'react'
import { Link } from 'react-router'
 
function Header() {
  return (
   <>
  <div className='h-12 bg-[#614518] text-center '>
    <div className='flex justify-center items-center'>
      <img className='w-[30px] h[30px]  ' src="https://i.ibb.co/TMc4Lszk/logo1.png" alt="" />
      <p  className='text-2xl text-shadow-blue-50 text-white'> Espresso Emperium</p>
    </div>
  </div>
   </>
  )
}

export default Header