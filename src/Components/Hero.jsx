import React from 'react'

function Hero() {
  return (
<>
   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/7JQ8dCp2/3.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className=" text-neutral-content text-left pl-[30%]">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5">
       It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable..
      </p>
      <button className="btn btn-primary bg-amber-700">Learn More</button>
    </div>
  </div>


</div>
  <div className='bg-[#b8a079] '>
  <div className='flex justify-center gap-4 w-[90%] mx-auto py-3'>
    <div className='w-[20%]'>
        <img  className='w-[30px]'src="https://i.ibb.co/9knXGdhM/1.png" alt="" />
        <h2 className='text-[15px] '>Awesome Aroma</h2>
        <p className='text-[10px]'>You will definitely be a fan of the design & aroma of your coffee</p>
    </div>
     <div className='w-[20%]'>
        <img className='w-[30px]' src="https://i.ibb.co/8Db6CjJB/2.png" alt="" />
        <h2 className='text-[15px] '>High Quality</h2>
        <p className='text-[10px]'>We served the coffee to you maintaining the best quality</p>
    </div>
     <div className='w-[20%]'>
        <img className='w-[30px]' src="https://i.ibb.co/LXcGqptq/3.png" alt="" />
        <h2 className='text-[15px] '>Pure Grades</h2>
        <p className='text-[10px]'>The coffee is made of the green coffee beans which you will love</p>
    </div>
     <div className='w-[20%]'>
        <img className='w-[30px]' src="https://i.ibb.co/7JQbtZYn/4.png" alt="" />
        <h2 className='text-[15px] '>Proper Roasting</h2>
        <p className='text-[10px]'>Your coffee is brewed by first roasting the green coffee beans</p>
    </div>
  </div>
  </div>

</>
  )
}

export default Hero