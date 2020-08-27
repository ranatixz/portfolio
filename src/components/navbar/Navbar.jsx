import React, { useState, useEffect } from 'react'
// import Link from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () =>{

    const [navBar, setNavBar] = useState(false)

    useEffect(()=>{
      Aos.init({ duration:2000 })
    }, [])

    const changeBackGround = () =>{
      if(window.scrollY >= 170){
        setNavBar(true)
      }else{
        setNavBar(false)
      }
      console.log(navBar)
    }

    window.addEventListener('scroll', changeBackGround)

    const navClass = () =>{
      let classes = "navbar fixed-top navbar-expand-lg navbar-light px-4 "
      if(navBar){
        classes += "bg-white py-4"
      }else if(!navBar){
        classes += "bg-none py-3"
      }
      return classes
    }

    return (
      <nav style={{transition: ".3s"}} className={navClass()}>
        <div className="container">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about-me">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="#">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
