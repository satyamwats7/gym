// import { useState } from 'react';
import React, { useState } from 'react';
import logo from '../Assests/logo.png';
import { Link } from 'react-scroll';
import '../Component/Navbar.css';


const Navbar = () => {
 const [nav, setnav] = useState(false);

 const changeBackground = () => {
  if (window.scrolly >= 50) {
   setnav(true);
  }
  else {
   setnav(false);
  }
 }

 window.addEventListener('scroll', changeBackground);
 return (

  <nav className={nav ? "nav active" : "nav"}>
   <Link to="main" className='logo'>
    <img src={logo} alt='' />
   </Link>

   <input className="menu-btn" type="checkbox" id="menu-btn" />
   <label className=" menu-icon" for="menu-btn">
    <span className="nav-icon"></span>
   </label>

   <ul className="menu">
    <li><Link to="main">Header</Link></li>
    <li><Link to="features">Feartures</Link></li>
    <li><Link to="offer">Offer</Link></li>
    <li><Link to="about">About</Link></li>
    <li><Link to="contact">Contact</Link></li>

   </ul>

  </nav>


 )
}
export default Navbar;