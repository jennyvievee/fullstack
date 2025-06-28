import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <nav className="fixed top-0 w-full bg-blue-900 text-white flex justify-evenly">
            <div className="flex gap-2">
              <Link to="/"></Link>
          <img src ="" alt="logo" />
          <h1 className='font-bold'>RivanCyber</h1>
          </div>
    
            <div className="flex gap-5">
          <Link to="/">Home</Link>    
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> 
          <Link to="/products">Products</Link>
            </div>
    
          </nav>
          
    
          <div className="flex justify-center">
            <div className="w-1000 h-1 bg-blue-900"></div>
            
          </div>
        </>
          
      )
    }

export default Header