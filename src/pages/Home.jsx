import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navebar from '../components/Navebar'

function Home() {
  return (
    <div><div className="container-xxl bg-white p-0">
    <Navebar/>
     <Outlet/>
     <Footer/>
     {/* Back to Top */}
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
   </div></div>
  )
}

export default Home