import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import CoffeCard from './CoffeCard';
import Hero from './Hero';
import Addcon from './Addcon';
 

function Home() {
  
  const initialCoffedata =useLoaderData();
  const [Coffedata, setCoffedata] = useState(initialCoffedata)
  console.log(Coffedata)
  return (
    <>
   <Hero></Hero>
   <Addcon></Addcon>
    <div>   
      
      <div className='grid grid-cols-2 gap-4 px-[10%] mx-auto my-10  p-5 rounded '>
        {
          Coffedata.map(coffe=><CoffeCard 
            Coffedata={Coffedata}
            setCoffedata={setCoffedata}
            key={coffe._id}
            coffe={coffe}></CoffeCard>)
          }
      </div>
    </div>
    </>
  )
}

export default Home