import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = ({linkClass}) =>{
    return (
        <React.Fragment>
            <li className="nav-item">
                 <Link className={linkClass} to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                 <Link className={linkClass} to="/about">About me</Link>
            </li>
            <li className="nav-item">
                 <Link className={linkClass} to="/services">Services</Link>
            </li>
            <li className="nav-item">
                 <Link className={linkClass} to="/recent-works">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link className={linkClass} to="/contact">Contact</Link>
            </li>
        </React.Fragment>
    )
}

export default NavItems
