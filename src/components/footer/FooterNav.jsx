import React from 'react'
import NavItems from '../navbar/NavItems'

const FooterNav = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <div className="collapse navbar-collapse offset">
                <ul className="nav navbar-nav my-2 mx-auto">
                    <NavItems
                        linkClass="nav-link nav-link-secondary"
                    />
                </ul>
            </div>
        </nav>
    )
}

export default FooterNav
