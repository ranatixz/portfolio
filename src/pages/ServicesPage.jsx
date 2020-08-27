import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Services from '../components/service/Services'
import Banner from '../components/banner/Banner'
const ServicesPage = () =>{
    return (
        <React.Fragment>
            <Navbar/>
            <Banner text="Services"/>
            <Services/>
        </React.Fragment>
    )
}

export default ServicesPage
