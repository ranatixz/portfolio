import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'
import Banner from '../components/banner/Banner'
import useDocumentTitle from '../hooks/useDocumentTitle'

const PortfolioPage = () =>{

    useDocumentTitle("Vincent's Portfolio")
    return (
        <React.Fragment>
            <Banner text="Portfolio"/>
            <Portfolio/>
        </React.Fragment>
    )
}

export default PortfolioPage
