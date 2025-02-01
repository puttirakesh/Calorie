import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '../Logout';

const Navbar = () => {
    return (
        <div className="absolute top-0 right-0 navbar bg-transparent w-screen mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                </div>
                <a className=" text-green-400 btn btn-ghost text-2xl">NutriLogix</a>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://avatar.iran.liara.run/public/boy?username" />
                    </div>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='text-xl text-white font-bold'>Home</Link></li>
                    <li><Link to="/contact" className='text-xl text-white font-bold'>Contact</Link></li>
                    <li><LogoutButton /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;