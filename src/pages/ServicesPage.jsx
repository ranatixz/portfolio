import React from 'react'
import Services from '../components/service/Services'
import Banner from '../components/banner/Banner'

const ServicesPage = () =>{
    return (
        <React.Fragment>
            <Banner text="Services"/>
            <Services/>
        </React.Fragment>
    )
}

export default ServicesPage
