import React from 'react'
import Logotype from '../assets/images/silicon.svg'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {

  return (
    <section className="navbar">

      <div className="container">
          
        <a className="silicon-logo" href="index.html">
            <img src={Logotype} />
            <span>Silicon</span>
        </a>
        
        <nav className="navbar">
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="contact.html">Contact</a>
        </nav>
        
        <DarkModeSwitch />
        
        <a className="btn-primary" href="#">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
        </a>
          
      </div>
    </section>
  )
}

export default Navbar