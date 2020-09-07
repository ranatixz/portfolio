import React from 'react'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Services from '../components/service/Services'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import useDocumentTitle from '../hooks/useDocumentTitle'
const Index = () =>{

    useDocumentTitle('Vincent Lanchita')

    return (
        <React.Fragment>
            <Banner text="Vincent A. Lanchita"/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
        </React.Fragment>
    )
}

export default Index
