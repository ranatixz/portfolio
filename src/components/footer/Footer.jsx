import React from 'react'
import './style.css'
import FooterNav from './FooterNav'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return (
        <footer className="footer-area mt-5">
            <div className="bg-primary mt-5 py-3">
                <div className="container my-3 py-5">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center my-1 py-2">
                            <Link to ="/">
                                <img 
                                    src={require('../../logo/logo-b.svg')}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="d-lg-block d-none">
                        <FooterNav/>
                    </div>
                    <div className="footer-social mt-lg-0 mt-4">
                        <SocialLinks/>
                    </div>
                </div>
            </div>         
        </footer>
    )
}

export default Footer
