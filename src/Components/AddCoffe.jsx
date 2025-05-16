import React from 'react'
import { BiLeftArrow } from 'react-icons/bi';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

function AddCoffe() {



const handleCoffeAdd =e=>{
    e.preventDefault()
    const form = e.target;
    const formdata = new FormData(form)

    const newCoffe =Object.fromEntries(formdata.entries())
    console.log(newCoffe)

    // clint coffe data add 

    fetch('http://localhost:5000/coffes',{
        method:'POST',
        headers:{
              'Content-Type': 'application/json',
        },
       body:JSON.stringify(newCoffe)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            console.log('after adding coffe ' ,data)

            Swal.fire({
 
  icon: "success",
  title: "Coffe added succesfully",
  showConfirmButton: false,
  timer: 1500
});
        }
    })
 }

  return (
    <form onSubmit={handleCoffeAdd} className='bg-orange-100 mx-auto p-3'>
        <div className='flex  items-center btn bg-amber-200 w-fit '>
            <FaLongArrowAltLeft />
        <Link to='/'> Back to home</Link>
        </div>
        <div className='px-[120px] text-center py-6'>
            <h1 className='font-bold'>Add New Coffee</h1>
            <p className='text-gray-600'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
    <div className='grid md:grid-cols-2 gap-2 px-[90px] text-left'>
       
        <div>
        <label className='label'>Name</label>    
        <input type="text"
        name='name'
        placeholder='Name'
        className="p-2 bg-white text-gray-700  rounded w-full  focus:outline-none outline-none " /></div>
         <div>
        <label className='label'>Chef</label>    
        <input type="text"
        name='chef'
        placeholder=' Chef'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Supplier</label>    
        <input type="text"
        name='supplier'
        placeholder='Supplier'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Tast</label>    
        <input type="text"
        name='tast'
        placeholder='Tast'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Price</label>    
        <input type="text"
        name='price'
        placeholder='Price'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Details</label>    
        <input type="text"
        name='details'
        placeholder='Details'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
  
    </div>
    {/* //photo url  */}
    <div className='px-[90px] text-left py-3'>
         <div>
        <label className='label'>Photo</label>    
        <input type="text"
        name='photo'
        placeholder='Photo url'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
        <div>
            
        <button type='submit' className='bg-orange-300 w-full rounded p-2 cursor-pointer my-3'>Add Coffe</button>
        </div>
    </div>
    </form>
  )
}

export default AddCoffe