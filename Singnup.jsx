import React, { use } from 'react'
import { AuthContext } from './AugthContext';
import Swal from 'sweetalert2';

function Singnup() {

    const {createuser} = use(AuthContext)
    console.log(createuser)

    const handlesignUp =e=>{

        e.preventDefault();

        const form = e.target;

        const formdata = new FormData(form)
        const {email, password, ...userProfile} = Object.fromEntries(formdata.entries())

        // const email = formdata.get('email');
        // const password = formdata.get('password')
        console.log(email, password,userProfile)

        //creat user in the firebase 
        createuser(email, password)
        .then(result=>{
            console.log(result.user)

            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'

                },
                body:JSON.stringify(userProfile)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
console.log('after profile save ',data)
                }
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
     <div className='py-12'>
     <form onSubmit={handlesignUp} className="card bg-base-100  mx-auto   max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body  ">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <fieldset className="fieldset">
             <label className="label">Name</label>
          <input type="text" className="input" placeholder="name" name='name'/>
           <label className="label">Address</label>
          <input type="text" className="input" placeholder="Address" name='address'/>
           <label className="label">Phone</label>
          <input type="text" className="input" placeholder="Phone Number" name='phone'/>
          <label className="label">Photo </label>
          <input type="text" className="input" placeholder="Photo URL" name='photo'/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email'/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password'/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </form>
   </div>
  )
}

export default Singnup