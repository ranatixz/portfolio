import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Portfolio from '../components/portfolio/Portfolio'
import Banner from '../components/banner/Banner'
const PortfolioPage = () =>{
    return (
        <React.Fragment>
            <Navbar/>
            <Banner text="Portfolio"/>
            <Portfolio/>
        </React.Fragment>
    )
}

export default PortfolioPage
