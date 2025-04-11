import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'
import {UserAuth} from "../../context/AuthContext"
import "./Navbar.css"

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  const [scroll, setScroll] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displayMenuBoolean, setDisplayMenuBoolean] = useState(true)

  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/")
      window.location.reload()
    } catch(error) {
      console.error("Error during logout:", error)
    }     
  }

  const showMenu = () => {
    setDisplayMenu(!displayMenu)
    setDisplayMenuBoolean(true)
  }

  const hideMenu = () => {
    setDisplayMenuBoolean(!displayMenuBoolean)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const navbarClasses = `flex items-center justify-between w-full fixed top-0 left-0 z-[100] ${
    scroll ? 'bg-black' : 'bg-black bg-opacity-10'
  } px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-16`

  return (
    <div className={navbarClasses}>
      {user ? (
        <NavLink to="/browse" className="mr-10">
          <nav className="logo">
            <img src={require("../../images/netflix.png")} alt="Netflix" />
          </nav>
        </NavLink>
      ) : (
        <NavLink to="/" className="mr-10">
          <nav className="logo">
            <img src={require("../../images/netflix.png")} alt="Netflix" />
          </nav>
        </NavLink>
      )}
      
      {user?.email ? (
        <>
          <div className="buttonsNavbar mr-auto navbarMenu">
            <div onClick={showMenu} className="navbarArrowDown">
              <button className='active navlink'>Menu</button>
              <FaAngleDown className="text-[#c2c2c1] active self-center cursor-pointer ml-0.5" />
            </div>
            <NavLink to="/browse" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <button className="pr-4 hover:text-gray-400">Home</button>
            </NavLink>
            <NavLink to="/shows" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <button className="pr-4 hover:text-gray-400">TV Shows</button>
            </NavLink>
            <span className="line-through opacity-50">
              <button className="pr-4 text-gray-400 cursor-not-allowed">Movies</button>
            </span>
            <span className="line-through opacity-50">
              <button className="pr-4 text-gray-400 cursor-not-allowed">Recently Added</button>
            </span>
            <NavLink to="/browse/my-list" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <button className="pr-4 hover:text-gray-400">My list</button>
            </NavLink>
          </div>

          <div className={displayMenu && displayMenuBoolean ? 'buttonsNavbar mr-auto navBarMenuResponsive flex' : 'buttonsNavbar mr-auto navBarMenuResponsive hidden'} onMouseLeave={showMenu}>
            <NavLink to="/browse" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
              <button className="pr-4 hover:text-gray-400">Home</button>
            </NavLink>
            <NavLink to="/shows" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
              <button className="pr-4 hover:text-gray-400">TV Shows</button>
            </NavLink>
            <span className="line-through opacity-50">
              <button className="pr-4 text-gray-400 cursor-not-allowed">Movies</button>
            </span>
            <span className="line-through opacity-50">
              <button className="pr-4 text-gray-400 cursor-not-allowed">Recently Added</button>
            </span>
            <NavLink to="/browse/my-list" onClick={hideMenu} className={({ isActive }) => (isActive ? 'active hover:bg-[#181818]' : 'inactive hover:bg-[#181818]')}>
              <button className="pr-4 hover:text-gray-400">My list</button>
            </NavLink>
          </div>

          <div className="buttonsNavbar">
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Logout</button>
          </div>
        </>
      ) : (
        <div className="buttonsNavbar">
          <Link to="/login">
            <button className="bg-red-600">Sign In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar