import React from 'react'
import Services from '../components/service/Services'
import Banner from '../components/banner/Banner'
import useDocumentTitle from '../hooks/useDocumentTitle'

const ServicesPage = () =>{

    useDocumentTitle("Vincent's Services")
    return (
        <React.Fragment>
            <Banner text="Services"/>
            <Services/>
        </React.Fragment>
    )
}

export default ServicesPage
