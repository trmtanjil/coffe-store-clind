import React from 'react'
import { BsCupHot } from 'react-icons/bs'
import { Link } from 'react-router'

function Addcon() {
  return (
    <div className='mx-auto text-center py-12'>
        <p>---Sip & Savor ---</p>
        <h1 className='shadow-2xl text-2xl text-[331A15]'>Our Popular Products</h1>
        <Link to='addcoffe'><button className='btn bg-amber-500'>Add Coffe  <BsCupHot></BsCupHot></button></Link>
    </div>
  )
}

export default Addcon