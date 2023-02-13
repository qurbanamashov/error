
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.scss"

function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false)
  return (
    <nav>
      <div className='navbar'>
        <button className='navbar_Hamburger' onClick={()=> setMobileNavbar(!mobileNavbar)}>
        {mobileNavbar ? (<i class="fa-solid fa-x"></i>) : (<i class="fa-solid fa-bars"></i>)}
        </button>
        <div className='navbar_logo'>
          <h2>Q∞D</h2>
        </div>
        <ul className={mobileNavbar ? "navbar_link-mobil" :"navbar_link"}
        onClick={()=> setMobileNavbar(false)}>
          <Link to ={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <li>Contant</li>
        </ul>
        <div className='navbar_icon'>
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-registered"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar