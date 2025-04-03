import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartDashFill } from "react-icons/bs";

const Navbar = (props) => {
  return (
	<div>
	  <nav className='bg-orange-500 flex justify-between px-6 h-[60px] py-4 fixed top-0  left-0 right-0 z-50' >
		<Link to={'/'}>website</Link>
	  <ul className='flex items-center gap-8'>
		<li><Link to="/">home</Link></li>
		<li><Link to="/xyz">about</Link></li>
		<li className='flex'><Link to="/cart"><BsCartDashFill size={20}/> </Link><sup>{props.arr.length}</sup>  </li>
	  </ul>
	  
	  </nav>
	</div>
  )
}

export default Navbar
