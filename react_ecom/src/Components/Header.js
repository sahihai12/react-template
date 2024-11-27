import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const count = useSelector((state) => state.HandleCart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light Small shadow">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Eccomerce</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <NavLink  className="nav-NavLink" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-NavLink" to="/contact">Contact</NavLink>
              </li>
            </ul>
            
          </div>
          <div className='buttons'>
            <button className='btn btn-outline-dark ms-2'>
              <NavLink className='nav-NavLink' to="/">Login</NavLink>
            </button>
            <button className='btn btn-outline-dark ms-2'>
              <NavLink className="nav-NavLink" to="/">Register</NavLink>
            </button>
            <button className='btn btn-outline-dark ms-2'>
              <NavLink className="nav-NavLink" to="/cart">Cart ({count.length})</NavLink>
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header