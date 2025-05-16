import React from 'react'
import { Link, useLoaderData } from 'react-router'

function CoffeDetails() {
    const coffe = useLoaderData();
    console.log(coffe)
  return (
    
    <div className=' bg-amber-50  p-2'>
        
    <Link to='/'>
    <button className='btn btn-primary'>back home</button>
    </Link>
    <div className='flex p-8 justify-center'>
        <div>
          <img src={coffe.photo} alt="" />
        </div>
        <div>
      <h1 className='text-2xl shadow-2xl text-orange-300 '>Niceties</h1>
      <p> Name : {coffe.name}</p>
      <p> Chef : {coffe.chef}</p>
      <p> Supplier : {coffe.supplier}</p>
      <p> taste : {coffe.tast}</p>
      <p> Price : {coffe.price}</p>
      <p> Details : {coffe.details}</p>
        </div>
    </div>
    </div>
  )
}

export default CoffeDetails