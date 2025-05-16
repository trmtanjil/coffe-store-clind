import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
  const { _id,name, photo, price,chef, supplier, tast, details }= useLoaderData();
 
const handlecoffeUpdate=e=>{
  e.preventDefault()
  const form = e.target;
  const formData = new FormData(form);
  const UpdateCoffe = Object.fromEntries(formData.entries());
  console.log(UpdateCoffe)

  //send updated coffee to the db 
  fetch(`http://localhost:5000/coffes/${_id}`,{
    method:'PUT',
    headers:{
      'content-type' :'application/json'
      
    },
    body:JSON.stringify(UpdateCoffe)
  })
  .then(res =>res.json())
  .then(data=>{
    if(data.modifiedCount){
      console.log(data)
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
    <div>
   <div>
    <form onSubmit={handlecoffeUpdate} className='bg-orange-100 mx-auto  p-2'>
        <Link to='/'>
    <button className='btn btn-primary'>back home</button>
    </Link>
        <div className='px-[120px]'>
            <h1 className='font-bold'>Update  Coffee</h1>
         </div>
    <div className='grid md:grid-cols-2 gap-2 px-[90px] text-left'>
       
        <div>
        <label className='label'>Name</label>    
        <input type="text"
        defaultValue={name}
        name='name'
        placeholder='Name'
        className="p-2 bg-white text-gray-700  rounded w-full  focus:outline-none outline-none " /></div>
         <div>
        <label className='label'>Chef</label>  

        <input type="text"
        defaultValue={chef}
        name='chef'
        placeholder=' Chef'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Supplier</label>    
        <input type="text"
        defaultValue={supplier}
        name='supplier'
        placeholder='Supplier'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Test</label>    
        <input type="text"
        defaultValue={tast}
        name='tast'
        placeholder='Tast'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Price</label>    
        <input type="text"
        defaultValue={price}
        name='price'
        placeholder='Price'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
         <div>
        <label className='label'>Details</label>    
        <input type="text"
        defaultValue={details}
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
          defaultValue={photo}
        placeholder='Photo url'
        className="p-2 bg-white text-gray-700 rounded w-full  focus:outline-none" /></div>
        <div>
            
        <button type='submit' className='bg-orange-300 w-full rounded p-2 cursor-pointer my-3'>update Coffe</button>
        </div>
    </div>
    </form>
   </div>
    </div>
  );
};

export default UpdateCoffe;