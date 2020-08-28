import React from 'react'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'

const AboutPage = () =>{
    return (
        <React.Fragment>
            <Banner text="About"/>
            <About/>
        </React.Fragment>
    )
}

export default AboutPage
