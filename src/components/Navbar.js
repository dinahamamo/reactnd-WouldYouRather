import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
  <ul className="navbar">
    <li><NavLink to="/questions" className="nav-link" activeClassName="active">Home</NavLink></li>
    <li><NavLink to="/add" className="nav-link" activeClassName="active">New Question</NavLink></li>
    <li><NavLink to="/leaderboard" className="nav-link" activeClassName="active">Leaderboard</NavLink></li>
  </ul>

  )
}

export default Navbar