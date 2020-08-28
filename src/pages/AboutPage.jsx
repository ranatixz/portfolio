import React from 'react'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import useDocumentTitle from '../hooks/useDocumentTitle'

const AboutPage = () =>{

    useDocumentTitle('About Vincent')

    return (
        <React.Fragment>
            <Banner text="About"/>
            <About/>
        </React.Fragment>
    )
}

export default AboutPage
