import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () =>{
    return (
        <footer className="footer-area">
            <div className="bg-primary mt-5 py-3">
                <div className="container my-3 py-5">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center my-1 py-2">
                            <Link to ="/">
                                <img src={require('../../logo/logo-b.svg')}/>
                            </Link>
                        </div>
                    </div>
                    <div className="d-lg-block d-none">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                            <div className="collapse navbar-collapse offset">
                                <ul className="nav navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link nav-link-secondary" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-link-secondary" to="/about">About me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-link-secondary" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-link-secondary" to="/recent-works">Portfolio</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="footer-social mt-lg-0 mt-4">
                        <a href="https://www.facebook.com/RanatiXs/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCI0sLvNlaCMzXK-tHW076HQ?view_as=subscriber">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxwFWgGscwHvRHBzKxCDZLfmxqwndksDXlCVKQxQFMWqFnfHxwPFsXMdcRqmzHJSMfMZMT">
                            <i class="far fa-envelope"></i>
                        </a>
                        <a href="https://github.com/ranatixz">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>         
        </footer>
    )
}

export default Footer
