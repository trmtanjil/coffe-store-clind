import React from 'react'

function Signin() {

    const handlesignin=e=>{
        e.preventDefault();

        
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