import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <div className="navContainer">
      <div>
        <h1 className="navHeader">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Fun With Triangles 📐
          </Link>
        </h1>
        <ul id="nav">
          <li className={pathname === '/' ? 'activeNav' : ''}>
            <Link to="/">Triangle Quiz</Link>
          </li>
          <li className={pathname === '/triangle-checker' ? 'activeNav' : ''}>
            <Link to="/triangle-checker">Triangle Checker</Link>
          </li>
          <li className={pathname === '/find-hypotenuse' ? 'activeNav' : ''}>
            <Link to="/find-hypotenuse">Find Hypotenuse</Link>
          </li>
          <li className={pathname === '/triangle-area' ? 'activeNav' : ''}>
            <Link to="/triangle-area">Triangle Area</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
