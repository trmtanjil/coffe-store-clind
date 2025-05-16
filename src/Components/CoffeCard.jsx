import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
 import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

function CoffeCard({coffe,Coffedata,setCoffedata}) {
     const {_id ,photo, price, name,chef } = coffe;

    if(_id===0){
      <p>sdfjlkasfjhasdkfjhas</p>
    };

const handleDelet=(_id)=>{
 
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

//start deleting coffe 

console.log(_id)
    fetch(`http://localhost:5000/coffes/${_id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('after deleting data ', data)
        if(data.deletedCount){
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    //remove the coffe frome useStat 
    const remainingCoffe = Coffedata.filter(cof => cof._id !==_id );
    setCoffedata(remainingCoffe)

        }
    })




    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
     }
  return (
  <>
   <div className='flex justify-around  text-left items-center shadow-2xl   rounded '>
    {/* img  */}
    <div><img src={photo}  /></div>
    {/* text */}
    <div>
        <p>Name:{name} </p>
        <p>Chef :{chef}  </p>
        <p>Price :{price} </p>
    </div>
    {/* logo  */}
    <div className='m-2 p-2'>

        <Link to={`/coffedetails/${_id}`}>
        <button className='btn btn-primary m-2'><BsEyeFill></BsEyeFill></button>
         </Link>


            <Link to={`/updadetcoffe/${_id}`}>
              <button className='btn btn-primary m-2'>edit</button> 
            </Link>


       <p> <button onClick={()=> handleDelet(_id)} className='btn btn-secondary m-2'><MdDeleteForever /></button></p>
    </div>
   </div>
  </>
  )
}

export default CoffeCard