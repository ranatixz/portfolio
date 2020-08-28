import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'
import Banner from '../components/banner/Banner'

const PortfolioPage = () =>{
    return (
        <React.Fragment>
            <Banner text="Portfolio"/>
            <Portfolio/>
        </React.Fragment>
    )
}

export default PortfolioPage
