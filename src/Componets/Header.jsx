import React from 'react'
import {Container, Navbar} from 'react-bootstrap';
function Header() {
  return (
    <Navbar className="text-light ms-3"> 
      <Navbar.Brand href="#home">
        <div className="d-flex">
          <img style={{ width: "40px",height:"40px" }}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Media_Player_Windows_11_logo.svg/2048px-Media_Player_Windows_11_logo.svg.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" alt="" />
        <h1 className='text-white ms-2'>Media Player</h1> 
        </div>
        
      </Navbar.Brand> 
  </Navbar>
  )
}

export default Header