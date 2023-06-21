import React from 'react'
import './Layout.css'
import {NavLink, Outlet} from "react-router-dom";

const activeMenuClass = ({ isActive }) => isActive ? "active-menu" : "";

const Layout = () => {
  return (
    <>
    <nav>
        <ul className='headerLinks'>
          <li>
            <NavLink to={"/"} className={activeMenuClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/posts"} className={activeMenuClass}  >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={"/create"} className={activeMenuClass}  >
            Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className={activeMenuClass}  >
            Login
            </NavLink>
          </li>
        </ul> 
      </nav>
      <div className='container'>
        <Outlet/>
      </div>
        <footer>G23</footer>
      </>
  )
}

export default Layout