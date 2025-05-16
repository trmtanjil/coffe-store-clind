import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
 

function Fotter() {
  return (
        <footer className="bg-[url('/your-background-image.jpg')] bg-cover bg-center bg-gray-300 py-12 text-[#5c4623]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between w-[90%]">
        {/* Left Section */}
        <div className="md:w-1/2 px-4">
          <img className='w-[30px] h[30px]  ' src="https://i.ibb.co/TMc4Lszk/logo1.png" alt="" />
          <h2 className="text-2xl font-bold">Espresso Emporium</h2>
          <p className="mt-2">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <div className="flex mt-4 space-x-4">
            <i className="fab fa-facebook text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-instagram text-xl"></i>
            <i className="fab fa-linkedin text-xl"></i>
          </div>
          <div className='flex gap-2'>
            <FaFacebook></FaFacebook>
            <BsYoutube></BsYoutube>
             
          </div>
          <div className="mt-4 space-y-2">
            <p>📞 +88 01533 333 333</p>
            <p>✉️ info@gmail.com</p>
            <p>📍 72, Wall Street, King Road, Dhaka</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 px-4 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <form className="mt-4 space-y-3">
            <input type="text" placeholder="Name" className="w-full p-2 bg-white text-gray-700 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 bg-white text-gray-700 rounded" />
            <textarea placeholder="Message" rows="4" className="w-full p-2 bg-white text-gray-700 rounded"></textarea>
            <button type="submit" className="px-4 py-2 bg-[#6b4b3d] text-white rounded hover:bg-[#543a2d]">Send Message</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Fotter