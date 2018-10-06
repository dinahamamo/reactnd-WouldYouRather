import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>OOPS</h1>
      <h2>This page isn't here.</h2>
      <Link to="/">Take me to the homepage!</Link>
    </div>
  )
}

export default NotFound