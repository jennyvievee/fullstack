import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-evenly">
        <div>
        <img src ="" alt="logo" />
          <h1 className='font-bold'>RivanCyber</h1>
        
        </div>

        <div className="flex flex-col">
            <span className='font-bold'>Page</span>
            <a href="a">Home</a>
            <a href="a">About</a> 
        </div>

        <div>
            <span className='font-bold'>Contact Us</span>
            <p>Contact Number: 123456789</p>
            <p>E-Mail: rivancyber@email.com</p>
        </div>
    </footer>
  )
}

export default Footer