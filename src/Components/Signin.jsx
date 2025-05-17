import React, { use } from 'react'
import { AuthContext } from '../../AugthContext';

function Signin() {
  const {signinUser} = use(AuthContext)
  console.log(signinUser)


    const handlesignin=e=>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;
        signinUser(email,password)
        .then(result=>{
          console.log(result)
          const userInfo = {
            email,
            lastSignInTime:result.user?.metadata?.lastSignInTime
          }
          //update last sign in to the databse 
          fetch('http://localhost:5000/users',{
            method:'PATCH',
            headers:{
               'Content-Type': 'application/json'
            },
            body:JSON.stringify(userInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log('after edit data patch ',data)
          })
        })
        .catch(error=>{
          console.log(error)
        })
 
    }
  return (
   <div className='py-12'>
     <form onSubmit={handlesignin} className="card bg-base-100  mx-auto   max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body  ">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <fieldset className="fieldset">
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

export default Signin