import React from 'react'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
const AboutPage = () =>{
    return (
        <React.Fragment>
            <Navbar/>
            <Banner text="About"/>
            <About/>
        </React.Fragment>
    )
}

export default AboutPage
