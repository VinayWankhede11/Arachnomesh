import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import {IoMdArrowDropdownCircle} from "react-icons/io"

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
    <div  className="title">
        <span className="items-title">ARACHNOMESH</span> 
      </div>
      {(toggleMenu || screenWidth > 500) ? (

      <ul  className="list">
      
      <li  className="items"><NavLink to="/"><span className="word">Home</span></NavLink></li>
      <li  className="items"><NavLink to="/about"><span className="word1">About</span></NavLink></li>
      <li  className="items"><NavLink to="/bottles"><span className="word1">Bottles</span></NavLink></li>
      <li  className="items"><NavLink to ="/contact"><span className="word1">Contact</span></NavLink></li>
      <li  className="items">
        <button className="items-button">Login</button>
      </li>
    </ul>
      ):
(
      <button onClick={toggleNav} className="btn"><IoMdArrowDropdownCircle/></button>)}
    </nav>

  )
}