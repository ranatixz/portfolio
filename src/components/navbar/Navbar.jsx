import React from 'react'
// import Link from 'react-router-dom'

const Navbar = () =>{
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light p-4 bg-transparent">
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
