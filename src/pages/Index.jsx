import React from 'react'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Services from '../components/service/Services'
import Portfolio from '../components/portfolio/Portfolio'


const Index = () =>{
    return (
        <React.Fragment>
            <Banner text="Vincent A. Lanchita"/>
            <About/>
            <Services/>
            <Portfolio/>
        </React.Fragment>
    )
}

export default Index
