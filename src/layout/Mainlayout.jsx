import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import Fotter from '../Components/Fotter'

function Mainlayout() {
  return (
    <div>
        <Header></Header>
        <div  style={{ backgroundImage: "url('https://i.ibb.co/DgpMB5Qm/1.png')" }} className="bg-cover  bg-gray-200 ">
            <Outlet></Outlet>
        </div>
        <Fotter></Fotter>
    </div>
  )
}

export default Mainlayout