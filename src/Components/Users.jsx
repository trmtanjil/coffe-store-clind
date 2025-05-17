import React, { useState } from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router'
import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2'

function Users() {
    const initilusers = useLoaderData()
    const [users, setUsers] =useState(initilusers)


    const handleDelet=(id)=>{
    
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
       const remainingUser = users.filter(user=>user._id !== id)
    setUsers(remainingUser)

    fetch(`http://localhost:5000/users/${id}`,{
      method:'DELETE',
    
    })
    .then((res=>res.json()))
    .then(data=>{
      if(data.deletedCount){
        console.log('delet item',data)
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
      }
    })

 

  }
});
    }
    
  return (
    <div className='bg-gray-400  '>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           No
          </label>
        </th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user , index)=> 
      <tr>
        <th>
          <label>
          {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50 w-[70%]">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
        
          <br />
          <span className="badge badge-ghost badge-sm">{user.phone}</span>
        </td>
        <td>{user.email}</td>
        <th>
       <div className='flex'>
            <Link to={`/coffedetails/${user._id}`}>
        <button className='btn btn-primary m-2'><BsEyeFill></BsEyeFill></button>
         </Link>


            <Link to={`/updadetcoffe/${user._id}`}>
              <button className='btn btn-primary m-2'>edit</button> 
            </Link>

       <p> <button onClick={()=> handleDelet(user._id)} className='btn btn-secondary m-2'><MdDeleteForever /></button></p>
       </div>
        </th>
      </tr>)
    }
   
   
   
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default Users