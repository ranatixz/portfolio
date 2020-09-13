import React, { useState } from 'react'
import NavItems from './NavItems'
import { Link } from 'react-router-dom'

const Navbar = () =>{

    const [navBar, setNavBar] = useState(false)

    const changeBackGround = () =>{
      if(window.scrollY >= 612){
        setNavBar(true)
      }else{
        setNavBar(false)
      }
    }

    window.addEventListener('scroll', changeBackGround)

    const navClass = () =>{
      let classes = "navbar fixed-top navbar-expand-lg navbar-light px-4 "
      if(navBar){
        classes += "bg-white py-2 shadow"
      }else if(!navBar){
        classes += "bg-none py-1"
      }
      return classes
    }

    return (
      <nav style={{transition: ".3s"}} className={navClass()}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img 
              src={require('../../logo/logo-a.svg')}
              alt="logo"
            />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <NavItems
                linkClass="nav-link"
              />
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
